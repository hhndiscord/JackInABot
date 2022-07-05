import { MessageEmbed } from "discord.js";
var moment = require("moment-timezone");

const orlandoOpeningDay = moment.tz(
  "Sep 2th 2022 6:30PM",
  "MMM Do YYYY hA",
  "America/Los_Angeles"
);
let date = "2022-09-02T18:30:00";
let now = moment();
var dur = moment.duration(moment(date).diff(moment()));

let days = Math.floor(moment.duration(orlandoOpeningDay.diff(now)).asDays());
let hours = dur.hours();
let minutes = dur.minutes();
let seconds = dur.seconds();

export const orlandoCountdownMessage: any = new MessageEmbed()
  .setTitle(
    `${days} days until Halloween Horror Nights 31 at Universal Studios Orlando`
  )
  .setColor(0xff0000)
  .setDescription(
    `There are ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds until Halloween Horror Nights 31. Are you ready?`
  );
