const { getInfo } = require('ytdl-core');
const ytdl = require('ytdl-core');
const { MessageEmbed } = require("discord.js");


const queue = new Map();
module.exports = {
    async execute(message, videoUrl) {

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
        const songInfo = await getInfo(videoUrl);
    
        const serverQueue = queue.get(message.guild.id);
        const connection = await voiceChannel.join();
        if (!serverQueue) {
            const queueContruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                song: null,
                volume: 5,
                playing: true
            };
    
            queue.set(message.guild.id, queueContruct);
    
            queueContruct.song = songInfo;
    
            queueContruct.connection = connection;
        } else {
            serverQueue.connection = connection;
            serverQueue.song = songInfo;
        }
        message.channel.send(new MessageEmbed()
        .setTitle(`${songInfo.videoDetails.title}`)
        .setDescription(`é o grongos porra!`))
        playVideo(connection, songInfo);
    },
    
    async stop(message) {
        const serverQueue = queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
    
        if (!serverQueue)
            return message.channel.send("There is no song that I could stop!");
        if (!serverQueue.connection) {
            serverQueue.song = null;
            serverQueue.connection.dispatcher.end();
            serverQueue.connection.disconnect()
        }
    
    }
}
function playVideo(connection, songInfo) {
    const stream = ytdl.downloadFromInfo(songInfo, {filter: 'audioonly'})
    const dispatcher = connection.play(stream, {
        volume: 0.6,
    });
    dispatcher.on('finish', () => {
        console.log(`Finished playing ${songInfo.videoDetails.title}!`);
        connection.disconnect();
    });
    
    
}
