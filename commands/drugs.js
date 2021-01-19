const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Drugs extends Command {
  constructor () {
    super()

    this.name = 'droga',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=ReLba6jMWKQ";
    await execute(message, videoUrl);
  }
}