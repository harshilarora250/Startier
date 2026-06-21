require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/starty-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong! Startier Works!!\nLatency: ${latency}ms` });
});

app.command("/giveideastartier", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `testing!`});
});

app.command("/startiermeme", async ({ command, ack, respond}) => {
const start = Date.now();
await ack();
const latency = Date.now() - start;
await respond({ text: `testing!`});
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();