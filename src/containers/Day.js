import React from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { displayReminders, setDay } from '../actions/actionCreators';/* Display remiders */

const selectDay = (event, day, dispatch) => {
  event.preventDefault();
  dispatch(setDay(day));
};

const openReminderList = (event, dispatch) => {
  event.preventDefault();
  dispatch(displayReminders());
};

let Day = ({
  day, dayClasses, reminders, dispatch,
}) => {
  const timeClasses = classnames('time', dayClasses, 'blank');

  return (
    <time dateTime={day.format('YYYY-MM-DD')} className={timeClasses}>
      <div onClick={event => selectDay(event, day, dispatch)}>
        <span className="calendarDate">{` ${day.format('dddd')}  ${day.format('DD')}`}</span>
        {reminders.map(reminder => (<button className="reminderButton" type="button" key={uuidv4()} onClick={event => openReminderList(event, dispatch)}>{reminder.reminderText}</button>))}
      </div>
    </time>
  );
};

Day = connect()(Day);

export default Day;
