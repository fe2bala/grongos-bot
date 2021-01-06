const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Firework extends Command {
  constructor () {
    super()

    this.name = 'tiltado',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const serverQueue = queue.get(message.guild.id);
    const videoUrl = "https://www.youtube.com/watch?v=YaJ_a2-zG9M";
    await execute(message, videoUrl);
  }
}