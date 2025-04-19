const express = require("express");
const app = express();
const db = require("./models"); // ← Sequelizeのmodels/index.jsを自動で見る

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API起動中！");
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("サーバー起動： http://localhost:3000");
  });
});
