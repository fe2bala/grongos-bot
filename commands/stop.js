import { MessageEmbed } from "discord.js";
import Command from "../structures/Command";
import stop from "../utils/play";

export default class Firework extends Command {
  constructor () {
    super()

    this.name = 'tiltado',
    this.description = 'é o grongos porra!'
  }

  async run ({ message, client }) {
        await stop(message);
  }
}