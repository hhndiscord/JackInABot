import { Client, TextChannel } from "discord.js";
import { Commands } from "../Commands";
import { orlandoCountdownMessage } from "../embeddedMessages/OrlandoCountDownMessage";
import { hollywoodCountdownMessage } from "../embeddedMessages/HollywoodCountdownMessage";
require("dotenv").config();

const cron = require("node-cron");

const ORLANDO_GENERAL: any = process.env.ORLANDO_GENERAL;
const HOLLYWOOD_GENERAL: any = process.env.HOLLYWOOD_GENERAL;

let hollywoodGeneral: any;
let orlandoGeneral: any;

export default (client: Client): void => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }
    await client.application.commands.set(Commands);
    hollywoodGeneral = client.channels.cache.get(HOLLYWOOD_GENERAL);
    orlandoGeneral = client.channels.cache.get(ORLANDO_GENERAL);

    cron.schedule("0 22 * * 5", () => {
      hollywoodGeneral.send({ embeds: [hollywoodCountdownMessage] });
    });

    cron.schedule("30 22 * * 5", () => {
      orlandoGeneral.send({ embeds: [orlandoCountdownMessage] });
    });

    console.log(`${client.user.username} is online`);
  });
};
