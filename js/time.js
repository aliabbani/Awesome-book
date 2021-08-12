const getOrdinal = (param) => {
  param = Number(param).toString();
  const splitPop = param.split("").pop();
  const splitShift = param.split("").shift();
  const len = param.length;
  return splitPop === "1" && len === 1
    ? "st"
    : len === 2 &&
      splitPop === "1" &&
      (splitShift === "2" || splitShift === "3")
    ? "st"
    : splitPop === "2" && len === 1
    ? "nd"
    : len === 2 && splitPop === "2" && splitShift === "2"
    ? "nd"
    : splitPop === "3" && len === 1
    ? "rd"
    : len === 2 && splitPop === "3" && splitShift === "2"
    ? "rd"
    : "th";
};

const amPm = (hr) => {
  let pmAm = "pm";
  if (hr < 12) {
    pmAm = "am";
  }
  return pmAm;
};

const DateTime = luxon.DateTime;
const now = DateTime.now();
const localTime = now.toLocaleString(DateTime.DATETIME_MED);
const [date, month, year, time] = localTime.split(" ");
const [day, , yr, tiem] = localTime.split(" ");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let hour = now.hour;
hour = hour > 11 ? hour - 12 : hour;

const wantedDateTime =
  "" +
  months[now.month - 1] +
  " " +
  date +
  getOrdinal(now.date) +
  " " +
  yr +
  " " +
  hour +
  ":" +
  now.minute +
  ":" +
  now.second +
  " " +
  amPm(now.hour);

document.querySelector(".time-date").textContent = wantedDateTime;