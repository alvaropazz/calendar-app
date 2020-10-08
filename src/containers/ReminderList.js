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
    <div className="reminderList">
      <div className="weatherPanel">
        <WeatherCard day={day} />
      </div>
      <table className="ReminderListTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Time</th>
            <th>Color</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {reminders.map((item, index) => (
            <tr key={uuidv4()}>
              <td>{item.reminderText}</td>
              <td>{item.reminderCity}</td>
              <td>{item.reminderTime}</td>
              <td>{item.reminderColor}</td>
              <td>
                <button type="button" onClick={() => removeReminderItem(index, dispatch)}>
                  <span>x</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button type="button" className="button" onClick={event => openReminderList(event, dispatch)}>
          Done
        </button>
      </div>
    </div>
  </div>
);

ReminderList = connect()(ReminderList);

export default ReminderList;
