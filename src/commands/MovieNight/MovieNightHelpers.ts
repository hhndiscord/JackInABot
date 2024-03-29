import { bold, codeBlock } from "@discordjs/formatters";
require("dotenv").config();

const MOD_ROLE: any = process.env.MOD_ROLE;
const ADMIN_ROLE: any = process.env.ADMIN_ROLE;
//prettier-ignore
let numArray = [`:rotating_light::regional_indicator_g::regional_indicator_o::rotating_light:`,`:one:`,`:two:`,`:three:`,`:four:`,`:five:`,];
let stopCountDownTimer: boolean = false;
let count: number = 0;
let interval: any = null;
let movieStartTime: Date | null = null;

function formatTime(seconds: number) {
  let numhours: number = parseInt(
    Math.floor(((seconds % 31536000) % 86400) / 3600).toString(),
    10
  );
  let numminutes: number = parseInt(
    Math.floor((((seconds % 31536000) % 86400) % 3600) / 60).toString(),
    10
  );
  let numseconds: number = Math.floor(
    (((seconds % 31536000) % 86400) % 3600) % 60
  );

  return (
    (numhours < 10 ? "0" + numhours : numhours) +
    ":" +
    (numminutes < 10 ? "0" + numminutes : numminutes) +
    ":" +
    (numseconds < 10 ? "0" + numseconds : numseconds)
  );
}

const sendCountDownMessage = async (interaction: any, channel: any) => {
  if (!stopCountDownTimer && count >= 0) {
    channel
      .send(`${numArray[count]}`)
      .then(count--)
      .catch((error: Error) => console.log(error));
  } else {
    stopCountDownTimer = true;
    movieStartTime = new Date();
    clearInterval(interval);
  }
};

export const checkTime = async (interaction: any, channel: any) => {
  if (movieStartTime) {
    let currentTime = new Date();
    let timeDiff = (currentTime.getTime() - movieStartTime.getTime()) / 1000;
    movieStartTime &&
      interaction
        .followUp({
          content: bold(`**CURRENT ELAPSED TIME: ${formatTime(timeDiff)}**`),
        })
        .then(count--)
        .catch((error: any) => console.log(error));
  } else {
    interaction.followUp({
      content: `There are no timers currently set.`,
    });
  }
};

export const resetTimer = async (interaction: any, channel: any) => {
  if (!movieStartTime) {
    let date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    movieStartTime = date;
    interaction.followUp(
      {
        content: `Timer reset.`,
      },
      { ephemeral: true }
    );
  }
};

export const startTime = async (interaction: any, channel: any) => {
  let msg = `**COUNTDOWN STARTED - HIT PLAY AT** ${numArray[0]}`;
  interaction.followUp({ content: msg });
  stopCountDownTimer = false;
  count = 5;
  interval = setInterval(() => {
    sendCountDownMessage(interaction, channel);
  }, 1000);
  return;
};

export const stopTime = async (interaction: any, channel: any) => {
  stopCountDownTimer = true;
  count = 0;
  interval = null;
  if (movieStartTime) {
    let currentTime = new Date();
    let timeDiff = (currentTime.getTime() - movieStartTime.getTime()) / 1000;
    let stopTimerMsg = `**Movie timer stopped! Total time elapsed: ${formatTime(
      timeDiff
    )}**`;
    interaction
      .followUp({ content: `${stopTimerMsg}` })
      .then()
      .catch((error: any) => console.log(error));
    movieStartTime = null;
  } else {
    channel
      .send(`There are no timers currently set.`)
      .then()
      .catch((error: any) => console.log(error));
    movieStartTime = null;
  }
};
