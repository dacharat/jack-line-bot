const config = require("../config");
const line = require("@line/bot-sdk");
const client = new line.Client(config);

handleReply = (event) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  if (event.message.text.includes("รูป")) {
    return client.replyMessage(event.replyToken, {
      type: "image",
      originalContentUrl:
        "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
      previewImageUrl:
        "https://images.performgroup.com/di/library/GOAL/a6/bb/fifa-18-ronaldo_lx3r88bpjpk91re36ukdgomrj.jpg?t=2027563652&w=620&h=430",
    });
  } else if (event.message.text.includes("ด่า")) {
    let name = event.message.text.substring(3);
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "ไอควาย" + name,
    });
  } else if (event.message.text.includes("stat")) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: JSON.stringify(event),
    });
  }

  if (event.source.type === "group") {
    if (event.message.text === "ออกไป๊") {
      return client.leaveGroup(event.source.groupId);
    } else if (event.message.text === "ท่านก้อง") {
      return client.replyMessage(event.replyToken, {
        type: "text",
        text: JSON.stringify(event),
      });
    }
  }

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: event.message.text,
  });
};

module.exports = handleReply;
