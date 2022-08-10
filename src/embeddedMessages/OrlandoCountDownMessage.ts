import { MessageEmbed } from "discord.js";
var moment = require("moment-timezone");

const openingDay = new Date("Sep 2, 2022 22:30:00").getTime();

let now = moment().utc().valueOf();
let distance = openingDay - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

export const orlandoCountdownMessage: any = new MessageEmbed()
  .setTitle(
    `${days} days until Halloween Horror Nights 31 at Universal Studios Orlando`
  )
  .setColor(0xff0000)
  .setDescription(
    `There are ${days} days left until Halloween Horror Nights 31 at Universal Studios Orlando. Are you ready?`
  );
