import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../../Command";
import {
  checkTime,
  resetTimer,
  startTime,
  stopTime,
} from "./MovieNightHelpers";
require("dotenv").config();

export const StartTime: Command = {
  name: "start",
  description: "Start the time keeper for movie night",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await startTime(
      interaction,
      client.channels.cache.get(interaction.channelId)
    );
  },
};

export const ResetTime: Command = {
  name: "reset",
  description: "Reset the time keeper for movie night",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await resetTimer(
      interaction,
      client.channels.cache.get(interaction.channelId)
    );
  },
};

export const StopTime: Command = {
  name: "stop",
  description: "Stop the time keeper for movie night",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await stopTime(
      interaction,
      client.channels.cache.get(interaction.channelId)
    );
  },
};

export const CheckTime: Command = {
  name: "check",
  description: "Check the timestamp for a running showtime",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await checkTime(
      interaction,
      client.channels.cache.get(interaction.channelId)
    );
  },
};
