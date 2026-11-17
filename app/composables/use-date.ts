export function useDate() {
  let today = new Date();

  let minute = new Date().toLocaleTimeString().slice(0, -3);

  let date = today.toLocaleString("ru-RU", {
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  let currentDate = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}, ${today.getHours()}:${new Date().toLocaleTimeString().slice(0, -6)}`;

  // let number = `${today.getDate()}${today.getMonth() + 1}${today.getMinutes()}${today.getSeconds()}`;

  let fullYear = today.getFullYear();

  return { date, currentDate, fullYear };
}
