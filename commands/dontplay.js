const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Drugs extends Command {
  constructor () {
    super()

    this.name = 'eunaojogo',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=AK8A54m6jJ8";
    await execute(message, videoUrl);
  }
}