import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import React from 'react';
import moment from 'moment';
import ReminderButton from '../containers/ReminderButton';
import ReminderSet from '../containers/ReminderSet';
import ReminderList from '../containers/ReminderList';
import Day from '../containers/Day';

export const renderAddReminderButton = day => (
  <ReminderButton day={day} />
);

export const renderReminderList = (day, showRemindersDisplay, reminders) => {
  const panel = showRemindersDisplay ? <ReminderList day={day} reminders={reminders} /> : null;
  return panel;
};

export const renderReminderPanel = reminderData => {
  const { setRemindersDisplay } = reminderData;
  const panel = setRemindersDisplay ? <ReminderSet reminderData={reminderData} /> : null;
  return panel;
};

export const renderCalendarWeeks = (calendarRanges, day, month, reminders) => calendarRanges.map(week => {
  const dayList = [];
  week.by('days', x => dayList.push(x));
  return dayList.map(x => {
    const remindersByDay = reminders[x.format('DD-MM-YYYY')] || [];
    const dayClasses = classnames({
      day_muted: x.month() !== month,
      day_selected: x.format('DD-MM-YYYY') === day.format('DD-MM-YYYY'),
      day_today: x.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY'),
    });

    return (
      <Day
        dayClasses={dayClasses}
        day={x}
        key={uuidv4()}
        reminders={remindersByDay}
      />
    );
  });
});
