import React from 'react';
import { connect } from 'react-redux';
import {
  setReminder, setReminderText, setReminderCity, setReminderTime, setReminderColor,
} from '../actions/actionCreators';
import WeatherCard from './WeatherCard';

const setText = (event, reminderIndex, dispatch) => {
  const { value } = event.target;
  dispatch(setReminderText(value, reminderIndex));
};

const setCity = (event, reminderIndex, dispatch) => {
  const { value } = event.target;
  dispatch(setReminderCity(value, reminderIndex));
};

const setTime = (event, reminderIndex, dispatch) => {
  const { value } = event.target;
  dispatch(setReminderTime(value, reminderIndex));
};

const setColor = (event, reminderIndex, dispatch) => {
  const { value } = event.target;
  dispatch(setReminderColor(value, reminderIndex));
};

const showSetReminder = (event, day, reminderIndex, dispatch) => {
  event.preventDefault();
  dispatch(setReminder(day, true, reminderIndex));
};

let ReminderSet = ({ reminderData, dispatch }) => {
  const { reminders, day } = reminderData;
  const reminderIndex = reminders[day.format('DD-MM-YYYY')].length - 1;
  const reminder = reminders[day.format('DD-MM-YYYY')];
  const rText = reminder[reminderIndex].reminderText || '';
  const rCity = reminder[reminderIndex].reminderCity || '';
  const rTime = reminder[reminderIndex].reminderTime || '';
  const rColor = reminder[reminderIndex].reminderColor || '';
  return (
    <form>
      <div className="reminderCard">
        <div>
          <div className="weatherPanel">
            <WeatherCard day={day} />
          </div>
        </div>
        <div className="reminderCardForm">
          <div>
            <input placeholder="Text" name="text" type="text" value={rText} onChange={event => setText(event, reminderIndex, dispatch)} required />
          </div>
          <div>
            <input placeholder="City" name="city" type="text" value={rCity} onChange={event => setCity(event, reminderIndex, dispatch)} required />
          </div>
          <div>
            <input name="time" type="time" value={rTime} onChange={event => setTime(event, reminderIndex, dispatch)} required />
          </div>
          <div>
            <input name="color" type="color" value={rColor} onChange={event => setColor(event, reminderIndex, dispatch)} required />
          </div>
          <div>
            <input type="submit" className="button" onClick={event => showSetReminder(event, day, reminderIndex, dispatch)} />
          </div>
        </div>
      </div>

    </form>
  );
};

ReminderSet = connect()(ReminderSet);

export default ReminderSet;
