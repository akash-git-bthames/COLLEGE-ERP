const express = require("express");
require("dotenv/config");
const app = express();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  return res.json("Project started");
});
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
