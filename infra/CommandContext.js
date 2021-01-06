const { Message, Client } = require("discord.js")

module.exports = class CommandContext {
  /**
   * Context of a command
   * @param {Message} context.message 
   * @param {Client} context.client
   */
  constructor (context) {
    this.message = context.message
    this.client = context.client
  }
}