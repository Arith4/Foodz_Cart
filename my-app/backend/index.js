const express = require("express");
const app = express();
const port = 5000;
const connection = require("./db");

app.use(express.json());

connection();
app.get("/", (req,res) => {
    res.send("Hello");
});

app.use('/api', require("./routes/createUser"));

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
