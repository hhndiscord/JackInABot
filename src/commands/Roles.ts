import {
  BaseCommandInteraction,
  Client,
  MessageActionRow,
  MessageButton,
  User,
} from "discord.js";
import { Command } from "../Command";

const UserRoles = ["ADMIN", "MODERATOR", "ORLANDO", "HOLLYWOOD"];
type UserRole = typeof UserRoles[number];

export const Roles: Command = {
  name: "button",
  description: "Returns a message with a button option",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("primary")
        .setLabel("1")
        .setStyle("PRIMARY")
    );

    await interaction.followUp({
      content: "Hello button",
      components: [row],
    });
  },
};
