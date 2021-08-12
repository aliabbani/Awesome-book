
const getTime = () => {
  const getOrdinal = (param) => {
    param = Number(param).toString();
    const splitPop = param.split('').pop();
    const splitShift = param.split('').shift();
    const len = param.length;
    if (splitPop === '1' && len === 1) {
      return 'st';
    } if (
      len === 2
      && splitPop === '1'
      && (splitShift === '2' || splitShift === '3')
    ) {
      return 'st';
    } if (splitPop === '2' && len === 1) {
      return 'nd';
    } if (len === 2 && splitPop === '2' && splitShift === '2') {
      return 'nd';
    } if (splitPop === '3' && len === 1) {
      return 'rd';
    } if (len === 2 && splitPop === '3' && splitShift === '2') {
      return 'rd';
    }

    return 'th';
  };
  const amPm = (hr) => {
    let pmAm = 'pm';
    if (hr < 12) {
      pmAm = 'am';
    }
    return pmAm;
  };

  var DateTime = luxon.DateTime;
  const dt = DateTime.now();
  const x = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

  let [day, month, year, time] = x.split(' ');

  let [hr, min, sec] = time.split(':');
  hr = hr > 11 ? hr - 12 : hr;
  time = `${hr}:${min}:${sec}`;

  const wantedTimeDate = `${month} ${day}${getOrdinal(
    day.toString(),
  )} ${year} ${time} ${amPm(day)}`;
  return wantedTimeDate;
};
setInterval(() => {
  document.querySelector('.time-date').textContent = getTime();
}, 1000);