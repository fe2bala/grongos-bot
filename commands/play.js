const ytdl = require('ytdl-core');

module.exports = {
    async firework(message) {
        const videoUrl = "https://www.youtube.com/watch?v=eXhPThYwwTQ";
        const title = "firework";

        await playVideo(message, videoUrl);
    },
    async tilted(message) {
        const videoUrl = "https://www.youtube.com/watch?v=YaJ_a2-zG9M";
        const title = "i'm Tilted";
        await playVideo(message, videoUrl);
    },
    async whatMusic(message) {
        const videoUrl = "https://www.youtube.com/watch?v=vrHsh3lrv4o";
        const title = "What is This music playing";

        await playVideo(message, videoUrl);
    },
    async whereIsYoda(message) {
        const videoUrl = "https://www.youtube.com/watch?v=KV0tr0hhxe0";
        const title = "Yodao";
        await playVideo(message, videoUrl);
    }
    
}
async function playVideo(message, videoUrl, title) {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl(videoUrl), {
            volume: 0.6,
        });
        dispatcher.on('finish', () => {
            console.log(`Finished playing ${title ? title : "video"}!`);
            connection.disconnect();
        });

    } else {
        message.reply('Você precisa estar em um canal de voz primeiro');
    }
}

