const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Fart extends Command {
  constructor () {
    super()

    this.name = 'peidin',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=IDlV0egm5GM";
    await execute(message, videoUrl);
  }
}