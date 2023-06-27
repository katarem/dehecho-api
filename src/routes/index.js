const { Router } = require("express");
const fs = require("fs");
const router = Router();
const click = require("./click.json");

router.get("/", (req, res) => {
  res.json(click);
});

router.post("/", (req, res) => {
  const received = req.body;
  console.log(req.body);
  click.num = received.num;
  click.date = received.date;
  const save = JSON.stringify(click);
  fs.writeFile(__dirname + "/click.json", save, "utf-8", (err) => {
    if (err) throw err;
    console.log("se guardó");
  });
  res.json(click);
});

module.exports = router;
