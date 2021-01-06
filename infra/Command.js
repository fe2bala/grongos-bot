const { Message } = require("discord.js")

module.exports = class Command {
  constructor (settings) {
    this.name = ''
    this.description = ''
  }

  /**
   * Runs a command
   * @param {Message} param0.message 
   */
  run ({ message }) {
    message.reply('this command has no code.')
  }
}