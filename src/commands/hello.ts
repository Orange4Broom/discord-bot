import { Message } from "discord.js";

export const helloCommand = (message: Message) => {
  if (message.content === "!hello") {
    message.channel.send("Hello, world!");
  }
};
