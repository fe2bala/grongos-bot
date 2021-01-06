import { Message } from "discord.js"

export default class MessageParser {
  /**
   * Parses a message
   * @param {Message} message 
   */
  static parse (message) {
    if (message.content.startsWith(this.prefix)) {
      const commandName = message.content.split(' ')[0].slice(1)
      const command = message.client.commands.find(c => c.name === commandName)

      if (command) {
        console.log(`[${message.guild.name}] #${message.channel.name} <${message.author.tag}> ${message.content}`)
        command.run({ message, client: this })
      }
    }
  }
}