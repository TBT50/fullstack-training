const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("REQUEST");
});

const PORT = 3000;
app.listen(() => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
