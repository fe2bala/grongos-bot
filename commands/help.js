const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");

module.exports = class Help extends Command {
  constructor () {
    super()

    this.name = 'help',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    message.channel.send(new MessageEmbed()
    .setTitle(`Help`)
    .setDescription(client.commands.reduce(s, command=> s + "!" + command,"Comandos: ")))
  }
}