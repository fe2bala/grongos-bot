const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Scream extends Command {
  constructor () {
    super()

    this.name = 'grito',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=40oXI9sANvo";
    await execute(message, videoUrl);
  }
}