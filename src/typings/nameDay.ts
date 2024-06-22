export interface NameDayData {
  date: string;
  dayNumber: string;
  dayInWeek: string;
  monthNumber: string;
  month: {
    nominative: string;
    genitive: string;
  };
  year: string;
  name: string;
  isHoliday: boolean;
  holiday: string;
}
