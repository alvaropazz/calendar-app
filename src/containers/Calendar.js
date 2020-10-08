import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import getMonth from '../utils/getMonth'; //
import NextMonthButton from './NextMonthButton';
import PreviousMonthButton from './PreviousMonthButton';
import {
  renderAddReminderButton, renderCalendarWeeks, renderReminderList, renderReminderPanel,
} from '../components/reminderComponents';
import './Calendar.css';

let Calendar = ({ calendarData, reminderData }) => {
  const { month, year } = calendarData;
  const { reminders, day, showRemindersDisplay } = reminderData;
  const calendarRanges = getMonth(year, month);
  const headerText = `${moment().month(month).format('MMMM')} ${year}`;
  const remindersArray = reminders[day.format('DD-MM-YYYY')];

  return (
    <div className="calendar">
      <header className="header">
        <span className="headerSpan">
          {headerText}
        </span>
        <PreviousMonthButton month={month} />
        <NextMonthButton month={month} />
      </header>
      <main>
        <section className="section">
          {renderCalendarWeeks(calendarRanges, day, month, reminders, reminderData)}
        </section>
      </main>
      {renderAddReminderButton(day)}
      {renderReminderPanel(reminderData)}
      {renderReminderList(day, showRemindersDisplay, remindersArray)}
    </div>
  );
};

Calendar.propTypes = {
  calendarData: PropTypes.shape({
    month: PropTypes.number,
    year: PropTypes.number,
  }),
  day: PropTypes.object,
};

Calendar = connect()(Calendar);

export default Calendar;
