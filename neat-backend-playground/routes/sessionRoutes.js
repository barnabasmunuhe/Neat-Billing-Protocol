const express = require("express"); //importing express framework

const router = express.Router(); //creates a mini app specifically for routes

const sessions = []; // In-memory session storage

// Neat API running
router.get("/", (req, res) => {
    res.send("Neat API running😃");
});

// start-session
router.post("/start-session", (req, res) => {
    const {userId, username} = req.body;

    if (!userId) {
        return res.status(400).json({
            error: "Please provide your userId",
        });
    }

    if (!username) {
        return res.status(400).json({
            error: "Enter your username!",
        });
    }

    // preventing duplicate sessions
    const sessionexisting = sessions.find(s => s.userId === userId && s.username == username && s.status !== "stopped"); // search through the sessions array to find if a session with the same userId & username already exists
    if (sessionexisting) {
        return res.status(409).json({
            error: "Conflict: Session already active"
        });
    }

    const session = {
        userId,
        username,
        status: "active",
        startTime: new Date().toISOString(),
        pausedAt: null,
        resumedAt: null,
        endTime: null,
        activeDuration: 0, // in milliseconds
        currentActiveStart: Date.now()
    };

    sessions.push(session);

    res.json({
        message: "session started😉",
        session
    });

});

// pause-session
/**
 * @notice After we pause, activeDuration MUST contain all billable time accumulated so far. 
 */
router.post("/pause-session", (req, res) => {
    const {userId, username} = req.body;

    const session = sessions.find(s => s.userId === userId && s.username === username); // finding a session with it's Id & name of user

    if (!session) {
        return res.status(404).json({
            error: "Session not found"
        });
    };

    if (session.status !== "active") { //Only active sessions can be paused
        return res.status(409).json({
            error: "Conflict: Session is NOT active"
        });
    };
    // Accounting for the active duration of time before the session was paused
    session.activeDuration += Date.now() - session.currentActiveStart;
    session.status = "paused";
    session.pausedAt = new Date().toISOString();

    res.json({
        message: "session paused!",
        activeDuration: session.activeDuration,
        session
    });
});

// resume-session
router.post("/resume-session", (req, res) => {
    const {userId, username} = req.body;

    const session = sessions.find(
    s => s.userId === userId && s.username === username);

    if (!session) {
        return res.status(404).json({
            error: "Session not found"
        });
    };

    if (session.status !== "paused") {
    return res.status(409).json({
        error: "Conflict: Session is NOT paused"
    })
};

    session.status = "active";
    session.resumedAt = new Date().toISOString();
    // resetting the time
    session.currentActiveStart = Date.now();

    res.json({
        message: "session resumed!",
        session
    });
});

// stop-session
router.post("/stop-session", (req, res) => {
    const {userId, username} = req.body;

    const session = sessions.find(s => s.userId === userId && s.username === username);

    if (!session) {
        return res.status(404).json({
            error: "Resource not found"
        });
    };

    session.status = "stopped";
    session.endTime = new Date().toISOString();

    res.json({
        message: "session terminated!",
        session
    });
    
});

// Get active sessions
router.get("/active-sessions", (req, res) => {
    const active = sessions.filter(s => s.status === "active");

    res.json({
        activeSessions: active,
        total_active_sessions : active.length
    });
});

// Get paused sessions
router.get("/paused-sessions", (req, res) => {
    const paused = sessions.filter(s => s.status === "paused");

    res.json({
        pausedSessions: paused,
        total_paused_sessions : paused.length
    });
});

/**
 * @dev This route should get stopped sessions within 24 hours
 * -This is any session that has been stopped to & from 12 midnight
 * 
 */
// Get stopped sessions
router.get("/stopped-sessions", (req, res) => {
    const stopped = sessions.filter(s => s.status === "stopped");

    res.json({
        stoppedSessions: stopped,
        total_stopped_sessions : stopped.length
    });
});

// get a session by userId
router.get("/sessionById/:userId", (req, res) => {
    const {userId} = req.params; // correct param extraction!Love it me!

    const session = sessions.find(s => s.userId === userId); // finding a session with it's Id & name of user

    if (!session) {
        return res.status(404).json({
            error: "Resource not found"
        });
    }

    res.json({
        session
    });
});

// get all sessions
router.get("/sessions", (req, res) => {
    const {status} = req.query; // extracting the status query parameter from the request

    const validStatuses = ["active", "paused", "stopped"]; // valid session statuses

    if (status){
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                error: "Invalid status filter. Valid options are: active, paused, stopped"
            });
        }

        const filteredSessions = sessions.filter(s => s.status === status);

        return res.json({
            sessions: filteredSessions,
            total_sessions: filteredSessions.length
        });
    }

    if (sessions.length === 0) {
    return res.json({
        message: "No sessions found",
        sessions: 0
    });
}

    res.json({
        sessions,
        total_sessions : sessions.length,
        total_active_sessions : sessions.filter(s => s.status === "active").length,
        total_paused_sessions : sessions.filter(s => s.status === "paused").length,
        total_stopped_sessions : sessions.filter(s => s.status === "stopped").length
    });
});

// Sessions count
router.get("/sessions-count", (req, res) => {
    const activeCount = sessions.filter(s => s.status === "active").length;
    const pausedCount = sessions.filter(s => s.status === "paused").length;
    const stoppedCount = sessions.filter(s => s.status === "stopped").length;

    res.json({
        activeSessions: activeCount,
        pausedSessions: pausedCount,
        stoppedSessions: stoppedCount
    });
});

module.exports = router; //export this router object so another file can use it