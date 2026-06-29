import dotenv from "dotenv";
import fs, { accessSync } from "fs";
import path from "path"; // <-- Added this so path.join() works
import { App } from "@slack/bolt"; // <-- Changed from require to import

dotenv.config(); // We only need this once

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

//Ping Startier
app.command("/starty-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong! Startier Works!!\nLatency: ${latency}ms` });
});

//Get All Commands Command
app.command("/startier-help", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Here are all the commands: /giveideastartier, /startiermeme, /howtomakememe, /starty-ping, /startier-saas, /startier-audience, /startier-audience\nLatency: ${latency}ms`})
})

//Give Saas Idea

app.command("/startier-saas", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `A discord/slack bot that autosummarizes daily chat into newsletters.`})
})

//Startier Audience
app.command("/startier-audience", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Startier can be used by entreprenuers, students, and anyone looking for ideas`})
})

//Startier Shark
app.command("/startier-shark", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now();
  await respond({ text: `I'm out. Just give up.`})
})

//Give idea command
app.command("/giveideastartier", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();

  //Load JSON ideas
  const filepath = path.join(process.cwd(), "ideas.json");
  const data = JSON.parse(fs.readFileSync(filepath, "utf8"));

  //Pick random idea
  const ideas = data.ideas;
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];

  const latency = Date.now() - start;

  await respond({
    text: `💡 ${randomIdea}\n⚡ ${latency}ms`
  });
});

//MEME!!
app.command("/startiermeme", async ({ command, ack, respond}) => {
    const start = Date.now()
    await ack();
    const latency = Date.now() - start;
    await respond({
        text: "Here's your meme heart emoji",
    blocks: [
        {
            type:"image",
            image_url: "https://i.imgflip.com/auv7i7.jpg",
            alt_text:"star"
        }
    ]})
});

//How to make meme?
app.command("/howmakememe", async ({ command, ack, respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: "If you want to make a meme, you can simply go onto this website and make the meme! https://imgflip.com/memegenerator"});
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();