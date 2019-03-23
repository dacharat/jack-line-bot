const config = require("../config");
const line = require("@line/bot-sdk");
const client = new line.Client(config);

handleGreet = event => {  
  let test =  client.multicast([process.env.jackID], {
    type: "text",
    text: "Hello this is from cron job"
  });
  
  return test
};

module.exports = handleGreet;
