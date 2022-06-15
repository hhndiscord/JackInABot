import { MessageEmbed } from "discord.js";

const handleSpamDelete = async (channel: any, message: any) => {
  const authorID = message.author.id;
  const member = message.guild.members.cache.get(authorID);
  const spamDeleteMessage = new MessageEmbed()
    // Set the title of the field
    .setTitle("Discord Invite Deleted")
    // Set the color of the embed
    .setColor(0xff0000)
    // Set the main content of the embed
    .setDescription(
      `I've caught a discord invite sent by user ${message.author}. I've automatically timed the user out, deleted the invite and notified them that invites are forbidden. Please check to see if they are a spammer or real user.`
    );
  const bannedWords = [
    `discord.gg`,
    `.gg/`,
    `.gg /`,
    `. gg /`,
    `. gg/`,
    `discord .gg /`,
    `discord.gg /`,
    `discord .gg/`,
    `discord .gg`,
    `discord . gg`,
    `discord. gg`,
    `discord gg`,
    `discordgg`,
    `discord gg /`,
  ];

  if (
    bannedWords.some((word) => message.content.toLowerCase().includes(word))
  ) {
    member
      .timeout(1 * 60 * 1000, "Sharing server invites is not permitted.")
      .then(console.log)
      .catch(console.error);
    message
      .delete()
      .catch((e: any) => console.error("Could not delete message."))
      .then(
        message.author.send(
          `Sharing discord invite links is not allowed on the Halloween Horror Nights server.  If this is a mistake, please contact the mod team via Modmail.`
        ),
        channel.send({ embeds: [spamDeleteMessage] })
      );
    return;
  }
};

export default handleSpamDelete;
