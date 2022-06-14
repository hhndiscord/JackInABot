import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../Command";

export const Weeknd: Command = {
  name: "weeknd",
  description: "Returns a list of music videos on youtube",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content: any = new MessageEmbed()
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

    await interaction.followUp({
      ephemeral: true,
      embeds: [content],
    });
  },
};
