import {
  AnyChannel,
  BaseCommandInteraction,
  Client,
  Interaction,
} from "discord.js";
import handleSpamDelete from "../commands/SpamDelete";
require("dotenv").config();

const MOD_ADMIN_CHAT: any = process.env.MOD_ADMIN_CHAT;
let modAdminChannel: AnyChannel | undefined;

export default (client: Client): void => {
  client.on("ready", () => {
    modAdminChannel = client.channels.cache.get(MOD_ADMIN_CHAT);
  });

  client.on("messageCreate", async (message) => {
    handleSpamDelete(modAdminChannel, message);
  });
};
