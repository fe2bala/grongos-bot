import { MessageEmbed } from "discord.js";
import Command from "../structures/Command";
import execute from "../utils/play";

export default class Firework extends Command {
  constructor () {
    super()

    this.name = 'grongos',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
    const serverQueue = queue.get(message.guild.id);
    const videoUrl = "https://www.youtube.com/watch?v=eXhPThYwwTQ";
    await execute(message, videoUrl);
  }
}