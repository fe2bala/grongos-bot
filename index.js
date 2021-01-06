const Discord = require("discord.js");
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

    switch (command){
        case 'grongos':
            await play.firework(message);
            return;
        case 'sum':
            const numArgs = args.map(x => parseFloat(x));
            const sum = numArgs.reduce((counter, x) => counter += x);
            message.reply(`The sum of all the arguments you provided is ${sum}!`);
            return;
        case 'ping':
            const timeTaken = Date.now() - message.createdTimestamp;
            message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
            return;
        case 'tiltado':
            await play.tilted(message);
            return;
        case 'musicaruim':
            await play.whatMusic(message);
            return;
        case 'stop':
            await play.stop(message);
            return;
        default:
            return;
    }
    
});



client.login(BOT_TOKEN);





