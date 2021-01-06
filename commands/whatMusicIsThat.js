const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class whatMusicIsThat extends Command {
  constructor () {
    super()

    this.name = 'porramusica',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=gXsOMpElafk";
    await execute(message, videoUrl);
  }
}