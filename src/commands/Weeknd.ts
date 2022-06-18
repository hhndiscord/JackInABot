import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../Command";
import { WeekndMessage } from "../embeddedMessages/EmbeddedMessages";

export const Weeknd: Command = {
  name: "weeknd",
  description: "Returns a list of music videos on youtube",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await interaction.followUp({
      ephemeral: true,
      embeds: [WeekndMessage],
    });
  },
};
