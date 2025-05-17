const express = require("express");
const app = express();
const db = require("./models");
const medicalLogsRouter = require("./routes/medicalLogs"); // ← 追加

app.use(express.json());
app.use("/medicalLogs", medicalLogsRouter); // ← 追加

app.get("/", (req, res) => {
  res.send("API起動中！");
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("サーバー起動： http://localhost:3000");
  });
});
