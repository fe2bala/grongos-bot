const ytdl = require('ytdl-core');

module.exports = {
    async firework(message) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=eXhPThYwwTQ"), {
                volume: 1,
            });
            dispatcher.on('finish', () => {
                console.log('Finished playing firework!');
                connection.disconnect();
            });
    
        } else {
            message.reply('Você precisa estar em um canal de voz primeiro');
        }
    }
}
