import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import { pingCommand } from "./commands/ping";
import { helloCommand } from "./commands/hello";
import { sayCommand } from "./commands/say";
import { infoCommand } from "./commands/info";
import { nameDayCommand } from "./commands/nameDay";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", (message) => {
  pingCommand(message);
  helloCommand(message);
  sayCommand(message);
  infoCommand(message);
  nameDayCommand(message);
});

client.login(process.env.DISCORD_TOKEN);
