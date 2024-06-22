export const fetchNameDayData = async () => {
  const req = await fetch("https://svatkyapi.cz/api/day");
  const data = await req.json();
  return data;
};
