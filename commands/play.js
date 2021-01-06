const ytdl = require('ytdl-core');

const queue = new Map();

module.exports = {
    async firework(message) {
        const serverQueue = queue.get(message.guild.id);
        const videoUrl = "https://www.youtube.com/watch?v=eXhPThYwwTQ";
        const title = "firework";

        await execute(message, videoUrl);
    },
    async tilted(message) {

        const videoUrl = "https://www.youtube.com/watch?v=YaJ_a2-zG9M";
        const title = "i'm Tilted";
        await execute(message, videoUrl);
    },
    async whatMusic(message) {
        const videoUrl = "https://www.youtube.com/watch?v=vrHsh3lrv4o";
        const title = "What is This music playing";

        await execute(message, videoUrl);
    },
    async whereIsYoda(message) {
        const videoUrl = "https://www.youtube.com/watch?v=KV0tr0hhxe0";
        const title = "Yodao";
        await execute(message, videoUrl);
    },
    async stop(message){
        const serverQueue = queue.get(message.guild.id);
        await stop(message,serverQueue);
    }
    
}
async function execute(message, videoUrl, title) {
    
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
            );
        }
    const serverQueue = queue.get(message.guild.id);
    const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: null,
        volume: 5,
        playing: true
        };
    
    queue.set(message.guild.id, queueContruct);

    queueContruct.song = song;
    const connection = await message.member.voice.channel.join();
    queueContruct.connection = connection;
    
    playVideo(connection, videoUrl, title);
}

function playVideo(connection, videoUrl, title) {
    const dispatcher = connection.play(ytdl(videoUrl), {
        volume: 0.6,
    });
    dispatcher.on('finish', () => {
        console.log(`Finished playing ${title ? title : "video"}!`);
        connection.disconnect();
    });
}

async function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
      
    if (!serverQueue)
      return message.channel.send("There is no song that I could stop!");
      
    serverQueue.songs = null;
    serverQueue.connection.dispatcher.end();
}

