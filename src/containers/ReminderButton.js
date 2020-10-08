import React from 'react';
import { connect } from 'react-redux';
import { setReminder } from '../actions/actionCreators'; /// **setReminders */

const showReminderPanel = (day, dispatch) => {
  dispatch(setReminder(day, false));
};

let ReminderButton = ({ day, dispatch }) => (
  <div className="reminderButton">
    <button className="button addReminderButton" onClick={() => showReminderPanel(day, dispatch)}>
      <span>+</span>
    </button>
  </div>
);

ReminderButton = connect()(ReminderButton);

export default ReminderButton;
