// app.get("/test", (req, res) => {
//     res.send("Test route is working!!");
// });

// app.get("/status", (req, res) => {
//     res.json({
//         server: "running",
//         project: "My Neat WiFi Backend",
//     });
// });

// app.get("/about", (req, res) => {
//     res.json({
//         developer: "Prince Barney",
//         project: "Neat WiFi",
//     });
// });

// app.get("/hello", (req, res) => {
//     const name = req.query.name;

//     res.json({
//         message: `Hello ${name}`,
//     });
// });

// app.get("/user/:id", (req, res) => {
//     const userId = req.params.id;

//     res.json({
//         "userId": userId,
//     });
// });

// app.get("/session/:sessionId", (req, res) => {
//     const userSession = req.params.sessionId;

    // res.json({
        // session: "active",
        // "sessionId": `${userSession}`,// this is already a string
        // sessionId: userSession,
    // });
// });

// app.get("/device/:routerId", (req, res) => {
//     const router = req.params.routerId;

//     res.json({
//         device: "active",
//         routerId: router,
//     });
// });

// start session route
// app.post("/start-session", (req, res) => {
//     const userId = req.body.userId;

//     res.json({
//         message: "session started",
//         userId: userId,
//     });
// });
