import { Client } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionsCreate";
require("dotenv").config();

const DEV_TOKEN = process.env.DEV_TOKEN;
const IS_PROD = process.env.IS_PROD;
const PROD_TOKEN = process.env.PROD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(IS_PROD === "true" ? PROD_TOKEN : DEV_TOKEN);
