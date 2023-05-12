import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../../Command";
import { checkTime, startTime, stopTime } from "./MovieNightHelpers";

const message = "Testing";

export const StartTime: Command = {
  name: "start",
  description: "Start the time keeper for movie night",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    await startTime(
      interaction,
      client.channels.cache.get("855831448522981399")
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
      client.channels.cache.get("855831448522981399")
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
      client.channels.cache.get("855831448522981399")
    );
  },
};
