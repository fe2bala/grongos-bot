const Discord = require("discord.js")
const { glob } = require("glob")
const MessageParser = require("./MessageParser")
module.exports = class GrongosBot extends Discord.Client {
  constructor () {
    super()

    this.prefix = '!'
    this.commands = []


    this.on('ready', () => {
      console.log('Logged in as', this.user.tag)
    })
  }

  async start () {
    console.log('Starting up!')

    console.log('Loading commands into client')
    await this.loadCommands()

    this.on('message', MessageParser.parse)

    this.login(process.env.BOT_TOKEN)
  }

  loadCommands () {
    this.commands = []
    return new Promise((resolve, reject) => {
      glob('./commands/*.js', { absolute: true }, (error, matches) => {
        for (const path of matches) {
          const LoadedCommand = require(path)
          this.commands.push(new LoadedCommand())
        }
        resolve()
      })
    })
  }
}