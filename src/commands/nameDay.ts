import { Message } from "discord.js";
import { fetchNameDayData } from "../functions/fetchNameDayData";
import { NameDayData } from "../typings/nameDay";

export const nameDayCommand = async (message: Message) => {
  const data: NameDayData = await fetchNameDayData();
  switch (message.content) {
    case "/info":
      message.channel.send(
        "Příkazy: \n" +
          "!day - vypíše dnešní den v týdnu a datum\n" +
          "!date - vypíše dnešní datum\n" +
          "!nameday - vypíše jméno, které má dnes svátek\n" +
          "!holiday - vypíše, zda je dnes svátek\n" +
          "!all - vypíše všechny informace"
      );
      break;

    case "!day":
      message.channel.send(
        `Dneska je ${data.dayInWeek}, ${data.dayNumber}. ${data.month.genitive} ${data.year}.`
      );
      break;

    case "!date":
      message.channel.send(`Dnešní datum je ${data.date}.`);
      break;

    case "!nameday":
      message.channel.send(`Dnes má svátek ${data.name}.`);
      break;

    case "!holiday":
      if (data.isHoliday) {
        message.channel.send(`Dnes je ${data.holiday}.`);
      } else {
        message.channel.send("Dnes není svátek.");
      }
      break;

    case "!all":
      message.channel.send(
        `Dneska je ${data.dayInWeek}, ${data.dayNumber}. ${data.month.genitive} ${data.year}. Dnes má svátek ${data.name}.`
      );
      break;
  }
};
