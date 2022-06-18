import { MessageEmbed } from "discord.js";

export const WeekndMessage: any = new MessageEmbed()
  .setTitle(`...but The Weeknd isn't horror?`)
  .setColor(0xff0000)
  .setThumbnail(
    "https://yt3.ggpht.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s176-c-k-c0x00ffffff-no-rj"
  )
  .setDescription(
    `Sure he is! Horror is a lot more dynamic than you may think. It's not limited to just one specific genre of music. Check out these music videos...`
  )
  .addFields(
    {
      name: "Too Late",
      value: "[Watch on YT](https://www.youtube.com/watch?v=Wh8DT09QCHI)",
      inline: true,
    },
    {
      name: "In Your Eyes",
      value: "[Watch on YT](https://www.youtube.com/watch?v=dqRZDebPIGs)",
      inline: true,
    },
    {
      name: "After Hours",
      value: "[Watch on YT](https://www.youtube.com/watch?v=oq9AgxHvGjw)",
      inline: true,
    },
    {
      name: "Sacrifice",
      value: "[Watch on YT](https://www.youtube.com/watch?v=VafTMsrnSTU)",
      inline: true,
    },
    {
      name: "Gasoline",
      value: "[Watch on YT](https://www.youtube.com/watch?v=iOa7uE23qc4)",
      inline: true,
    },
    {
      name: "Die For You",
      value: "[Watch on YT](https://www.youtube.com/watch?v=uPD0QOGTmMI)",
      inline: true,
    }
  );

export const ShowSpoilersMessage: any = new MessageEmbed()
  .setTitle(`Gain access to the spoiler channels`)
  .setColor(0xff0000)
  .setDescription(
    `If you don’t mind potential spoilers to events, shows or scare zones and want access to the spoiler channels, click the button below.  Please help us keep the public channels spoiler free by using these channels and using the spoiler tags.`
  );
