const express = require("express");
const line = require("@line/bot-sdk");
const config = require("./config");

const handleReply = require("./controllers/reply");
const handkeGreet = require("./controllers/greeting")

const port = process.env.PORT || 4000;
const app = express();

app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleReply)).then(result =>
    res.json(result)
  );
});

app.post("/webhook/greet", line.middleware(config), (req, res) => {    
  Promise.all(req.body.events.map(handleGreet)).then(result =>
    res.json(result)
  );
})

app.listen(port);
