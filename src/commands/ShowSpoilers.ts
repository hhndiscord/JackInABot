import {
  BaseCommandInteraction,
  Client,
  MessageActionRow,
  MessageButton,
} from "discord.js";
import { Command } from "../Command";
import { ShowSpoilersMessage } from "../embeddedMessages/EmbeddedMessages";

const spoilerChannelButton = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("primary")
    .setLabel("Show me the spoiler channels!")
    .setStyle("PRIMARY")
);

export const ShowSpoilers: Command = {
  name: "spoilers",
  description: "Get spoiler role to show the spoiler channels",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await interaction.followUp({
      ephemeral: true,
      embeds: [ShowSpoilersMessage],
      components: [spoilerChannelButton],
    });
  },
};
