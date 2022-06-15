import { AnyChannel, Client, Intents } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionsCreate";
import handleSpamDelete from "./commands/SpamDelete";
require("dotenv").config();

const DEV_TOKEN = process.env.DEV_TOKEN;
const IS_PROD = process.env.IS_PROD;
const PROD_TOKEN = process.env.PROD_TOKEN;
const MOD_ADMIN_CHAT: any = process.env.MOD_ADMIN_CHAT;
let modAdminChannel: AnyChannel | undefined;

console.log("Bot is starting...");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

ready(client);
interactionCreate(client);

client.on("ready", () => {
  modAdminChannel = client.channels.cache.get(MOD_ADMIN_CHAT);
});

client.on("messageCreate", async (message) => {
  handleSpamDelete(modAdminChannel, message);
});

client.login(IS_PROD === "true" ? PROD_TOKEN : DEV_TOKEN);
