const getTime = () => {
  const getOrdinal = (param) => {
    param = Number(param).toString();
    const splitPop = param.split('').pop();
    const splitShift = param.split('').shift();
    const len = param.length;
    return splitPop === '1' && len === 1
      ? 'st'
      : len === 2
        && splitPop === '1'
        && (splitShift === '2' || splitShift === '3')
        ? 'st'
        : splitPop === '2' && len === 1
          ? 'nd'
          : len === 2 && splitPop === '2' && splitShift === '2'
            ? 'nd'
            : splitPop === '3' && len === 1
              ? 'rd'
              : len === 2 && splitPop === '3' && splitShift === '2'
                ? 'rd'
                : 'th';
  };
  const amPm = (hr) => {
    let pmAm = 'pm';
    if (hr < 12) {
      pmAm = 'am';
    }
    return pmAm;
  };

  const { DateTime } = luxon;
  const dt = DateTime.now();
  const x = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

  let [day, month, year, time] = x.split(' ');

  let [hr, min, sec] = time.split(':');
  hr = hr > 11 ? hr - 12 : hr;
  time = `${hr}:${min}:${sec}`;

  const wantedTimeDate = `${
    month
  } ${
    day
  }${getOrdinal(day.toString())
  } ${
    year
  } ${
    time
  } ${
    amPm(day)}`;
  return wantedTimeDate;
};
setInterval(
  () => {
    (document.querySelector('.time-date').textContent = getTime());
  },
  1000,
);