const express = require("express"); // getting access to express package

const app = express(); //entire neat protocol backend

const PORT = 3000;

const sessionRoutes = require("../routes/sessionRoutes"); //importing the session routes

// middleware that runs before routes
app.use(express.json());

app.use("/", sessionRoutes); // using the session routes for all routes starting with "/"

app.listen(PORT, (req, res) => {
    console.log(`server running on Port ${PORT}`);
});