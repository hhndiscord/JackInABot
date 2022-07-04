import { MessageEmbed } from "discord.js";
import moment from "moment";

const hollywoodOpeningDay = new Date("Sep 8, 2022 22:00:00").getTime();
let now = moment().utc().valueOf();
let distance = hollywoodOpeningDay - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

export const hollywoodCountdownMessage: any = new MessageEmbed()
  .setTitle(
    `${days} days until Halloween Horror Nights 31 at Universal Studios Orlando`
  )
  .setColor(0xff0000)
  .setDescription(
    `There are ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds until Halloween Horror Nights 31. Are you ready?`
  );
