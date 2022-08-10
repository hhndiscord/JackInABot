import { MessageEmbed } from "discord.js";
var moment = require("moment-timezone");

const hollywoodOpeningDay = moment.tz(
  "Sep 8th 2022 7PM",
  "MMM Do YYYY hA",
  "America/Los_Angeles"
);

let now = moment().tz("America/Los_Angeles");

// get the difference between the moments
const diff = hollywoodOpeningDay.diff(now);
const diffDuration = moment.duration(diff);

let days = Math.floor(moment.duration(hollywoodOpeningDay.diff(now)).asDays());
let hours = diffDuration.hours();
let minutes = diffDuration.minutes();
let seconds = diffDuration.seconds();

export const hollywoodCountdownMessage: any = new MessageEmbed()
  .setTitle(
    `${days} days until Halloween Horror Nights 31 at Universal Studios Orlando`
  )
  .setColor(0xff0000)
  .setDescription(
    `There are ${days} days left until Halloween Horror Nights 31. Are you ready?`
  );
