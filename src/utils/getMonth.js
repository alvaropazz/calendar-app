import moment from 'moment';
import 'moment-range';

const getMonth = (year, month) => {
  const startDate = moment([year, month]);
  const firstDay = moment(startDate).startOf('month');
  const endDay = moment(startDate).endOf('month');
  const monthRange = moment.range(firstDay, endDay);
  const calendar = [];
  const weeks = [];

  monthRange.by('days', moment => {
    const currentWeek = moment.week();
    if (weeks.indexOf(currentWeek) < 0) return weeks.push(currentWeek);
  });

  weeks.forEach((week, i) => {
    let firstWeekDay = moment([year, month]).week(week).day(1);
    let lastWeekDay = moment([year, month]).week(week).day(7);
    if (i > 0 && week < weeks[i - 1]) {
      firstWeekDay = moment([year, month]).add(1, 'year').week(week).day(1);
      lastWeekDay = moment([year, month]).add(1, 'year').week(week).day(7);
    }

    const weekRange = moment.range(firstWeekDay, lastWeekDay);
    calendar.push(weekRange);
  });

  return calendar;
};

export default getMonth;
