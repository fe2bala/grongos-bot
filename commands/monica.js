const { MessageEmbed } = require("discord.js");
const Command = require("../infra/Command");
const { execute } = require("../utils/play");

module.exports = class Monica extends Command {
  constructor () {
    super()

    this.name = 'monica',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const videoUrl = "https://www.youtube.com/watch?v=YwbL2uE-bF0&ab_channel=BrotherhoodOfDollynhoChannel";
    await execute(message, videoUrl);
  }
}