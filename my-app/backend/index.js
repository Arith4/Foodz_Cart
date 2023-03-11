const express = require("express");
const app = express();
const port = 5000;
const connection = require("./db");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

connection();
app.get("/", (req,res) => {
    res.send("Hello");
});

app.use('/api', require("./routes/createUser"));

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
