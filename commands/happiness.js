const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Happiness extends Command {
  constructor () {
    super()

    this.name = 'acabouead',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=eXhPThYwwTQ";
    await execute(message, videoUrl);
  }
}