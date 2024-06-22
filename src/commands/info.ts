import { Message, EmbedBuilder } from "discord.js";

export const infoCommand = (message: Message) => {
  if (message.content === "!info") {
    const embed = new EmbedBuilder()
      .setTitle("Bot Information")
      .setDescription("This is a bot built using Discord.js and TypeScript.")
      .setColor(0x00ff00);

    message.channel.send({ embeds: [embed] });
  }
};
