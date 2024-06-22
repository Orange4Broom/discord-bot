import { Message } from "discord.js";

export const pingCommand = (message: Message) => {
  if (message.content === "!ping") {
    message.channel.send("Pong!");
  }
};
