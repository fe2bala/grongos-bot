const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Ping extends Command {
  constructor () {
    super()

    this.name = 'ping',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const timeTaken = Date.now() - message.createdTimestamp;	
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
}