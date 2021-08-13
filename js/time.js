const getTimeAndDate = () => {
  /* eslint-disable no-undef */
  const dt = luxon.DateTime.now();
  return dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
  /* eslint-disable no-undef */
};

setInterval(
  () => { (document.querySelector('.time-date').textContent = getTimeAndDate()); },
  1000,
);
