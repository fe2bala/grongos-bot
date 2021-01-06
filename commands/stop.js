const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { stop } = require("../utils/play");

module.exports = class Stop extends Command {
  constructor () {
    super()

    this.name = 'stop',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
        await stop(message);
  }
}