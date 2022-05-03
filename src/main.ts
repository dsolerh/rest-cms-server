import express from "express";

const app = express();

app.get("/", async function (req, res) {
  res.send("Hello world\n");
});

app.listen(4510)