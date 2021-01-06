const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class whereYoda extends Command {
  constructor () {
    super()

    this.name = 'yodao',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=KV0tr0hhxe0";
    await execute(message, videoUrl);
  }
}