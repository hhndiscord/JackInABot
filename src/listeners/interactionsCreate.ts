import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { Commands, EphemeralCommands } from "../Commands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: BaseCommandInteraction
): Promise<void> => {
  const slashCommand = Commands.find((c) => c.name === interaction.commandName);
  const isEphemeral = EphemeralCommands.find(
    (c) => c.name === interaction.commandName
  );
  console.log(isEphemeral ? true : false);
  if (!slashCommand) {
    interaction.followUp({ content: "An error has occurred" });
    return;
  }

  await interaction.deferReply({ ephemeral: isEphemeral ? true : false });

  slashCommand.run(client, interaction);
};
