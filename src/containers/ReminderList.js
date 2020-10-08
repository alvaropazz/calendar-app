import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeReminder, displayReminders } from '../actions/actionCreators';
import WeatherCard from './WeatherCard';

const removeReminderItem = (index, dispatch) => {
  dispatch(removeReminder(index));
  dispatch(displayReminders());
  setTimeout(() => {
    dispatch(displayReminders());
  }, 0);
};

const openReminderList = (event, dispatch) => {
  event.preventDefault();
  dispatch(displayReminders());
};

let ReminderList = ({ day, reminders, dispatch }) => (
  <div>
    <div className="centered ReminderList">
      <div className="weatherPanel">
        <WeatherCard day={day} />
      </div>
      <table className="ReminderListTable">
        <thead>
          <tr>
            <th className="reminderTableTH">Name</th>
            <th className="reminderTableTH">City</th>
            <th className="reminderTableTH">Time</th>
            <th className="reminderTableTH">Color</th>
            <th className="reminderTableTH" />
          </tr>
        </thead>
        <tbody>
          {reminders.map((item, index) => (
            <tr key={uuidv4()}>
              <td className="reminderTableTD">{item.reminderText}</td>
              <td className="reminderTableTD">{item.reminderCity}</td>
              <td className="reminderTableTD">{item.reminderTime}</td>
              <td className="reminderTableTD">{item.reminderColor}</td>
              <td className="reminderTableTD">
                <button onClick={() => removeReminderItem(index, dispatch)}>
                  <span>x</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="reminderCardFormDone reminderCardTableDone">
        <button className="reminderCardFormDoneButton button" onClick={event => openReminderList(event, dispatch)}>
          Done
        </button>
      </div>
    </div>
    {/* <div className="overlay" /> */}
  </div>
);

ReminderList = connect()(ReminderList);

export default ReminderList;
