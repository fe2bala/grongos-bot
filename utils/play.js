const { getInfo } = require('ytdl-core');
const ytdl = require('ytdl-core');

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
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
        };
    
        const serverQueue = queue.get(message.guild.id);
        const connection = await voiceChannel.join();
        if (!serverQueue) {
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
    
            queueContruct.connection = connection;
        } else {
            serverQueue.connection = connection;
            serverQueue.song = song;
        }
        playVideo(connection, song);
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
            serverQueue.songs = null;
            serverQueue.connection.dispatcher.end();
            serverQueue.connection.disconnect()
        }
    
    }
}
function playVideo(connection, song) {
    const dispatcher = connection.play(ytdl(song.url), {
        volume: 0.6,
    });
    dispatcher.on('finish', () => {
        console.log(`Finished playing ${song.title}!`);
        connection.disconnect();
    });
    return message.channel.send(
        `Playing ${song.title}`
    );
}
