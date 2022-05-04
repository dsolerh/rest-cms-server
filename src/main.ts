import express from "express";
import sequelize from "./common/database";
import auth from "./modules/auth";

const app = express();
app.use("/api", auth.routes);

app.get("/", async function (req, res) {
  res.send("Hello world\n");
});

app.listen(4510);
