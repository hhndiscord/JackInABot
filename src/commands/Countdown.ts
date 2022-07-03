import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../Command";
import { orlandoCountdownMessage } from "../embeddedMessages/OrlandoCountDownMessage";

export const Countdown: Command = {
  name: "countdown",
  description: "Returns a list of music videos on youtube",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await interaction.followUp({
      ephemeral: true,
      embeds: [orlandoCountdownMessage],
    });
  },
};
