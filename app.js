const express = require("express");
const line = require("@line/bot-sdk");
const config = require("./config");

const handleReply = require("./controllers/reply");

const port = process.env.PORT || 4000;
const app = express();

app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleReply)).then(result =>
    res.json(result)
  );
});

app.listen(port);
