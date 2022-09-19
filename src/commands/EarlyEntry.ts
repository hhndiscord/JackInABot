import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../Command";
import { EarlyEntryMessage } from "../embeddedMessages/EmbeddedMessages";

export const EarlyEntry: Command = {
  name: "earlyentry",
  description:
    "Returns information on early entry access at Universal Studios Hollywood",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await interaction.followUp({
      ephemeral: true,
      embeds: [EarlyEntryMessage],
    });
  },
};
