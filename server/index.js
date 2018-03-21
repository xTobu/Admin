const express = require("express");
const path= require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use("/", express.static(path.join(__dirname, '../client/build')));


// express will serve up index.html if it doesn't recognize the route
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
