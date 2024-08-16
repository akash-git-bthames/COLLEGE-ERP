import express from "express";
import "dotenv/config";
import routes from "./routes/routes.js";

const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  return res.json("Project started");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
