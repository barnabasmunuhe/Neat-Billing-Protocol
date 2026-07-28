const express = require("express");

const practice = express.practice();

const PORT = 5000;

const sessions = []; //sessions array object

// middleware
app.use(express.json()); //processes incoming requests before routes run

// home route
app.get("/", (req, res) => {
    res.send("Neat WiFi API is running");
});

app.post("/start-session", (req, res) => { //POST -> to create sessions & change the different fields values
    const userId = req.body.userId; //storing any userIds from client temporarily
    const userName = req.body.userName; //temporarily storing userNames for my server to remember

    if (!userId || !userName) {
        return res.status(400).json({
            error: "userId and userName are required!",
        });
    }

    const session = { //an object with fields to display a session details
        userName: userName,
        userId: userId,
        status: "active",
    };

    sessions.push(session); //pushing the session objects into sessions array since different users will interact with the session fields independently

    res.json({  //JSON output to display a session(s) fields
        message: "Session started",
        session: session,
    });
});

app.get("/sessions", (req, res) => { //display session(s) from user(s)
    res.json({
        activeSessions: sessions,
    });
});

app.get("/sessions-count", (req, res) => { 
    const totalSessions = sessions.length; // counts how many session(s) are running at the moment

    res.json({
        totalSessions: totalSessions,
    });
});

// login route
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!username){
        return res.status(400).json({
            error: "username required!"
        });
    }

    if(!password){
        return res.status(400).json({
            error: "password required!"
        });
    }

    res.json({
        message: "Login request received",
        username: username,
        password: password,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = practice;