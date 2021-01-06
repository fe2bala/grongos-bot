const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { stop } = require("../utils/play");

module.exports = class Firework extends Command {
  constructor () {
    super()

    this.name = 'tiltado',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
        await stop(message);
  }
}