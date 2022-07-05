import { MessageEmbed } from "discord.js";
var moment = require("moment-timezone");

let date = "2022-09-02T18:30:00";
var dur = moment.duration(moment(date).diff(moment()));

let days = dur.days();
let hours = dur.hours();
let minutes = dur.minutes();
let seconds = dur.seconds();

export const orlandoCountdownMessage: any = new MessageEmbed()
  .setTitle(
    `${days} days until Halloween Horror Nights 31 at Universal Studios Orlando`
  )
  .setColor(0xff0000)
  .setDescription(
    `There are ${Math.round(days)} days ${Math.round(hours)} hours ${Math.round(
      minutes
    )} minutes and ${Math.round(
      seconds
    )} seconds until Halloween Horror Nights 31. Are you ready?`
  );
