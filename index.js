const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const { play } = require('./commands')
 
const BOT_TOKEN = process.env.BOT_TOKEN;
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message',async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
    }
    if (command === 'grongos') {
        await play.firework(message);
    }
});



client.login(BOT_TOKEN);





