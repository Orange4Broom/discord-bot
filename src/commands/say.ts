import { Message } from "discord.js";

export const sayCommand = (message: Message) => {
  if (message.content.startsWith("!say ")) {
    const text = message.content.replace("!say ", "");
    message.channel.send(text);
  }
};
