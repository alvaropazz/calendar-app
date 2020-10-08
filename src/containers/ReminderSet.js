import React, { PropTypes } from 'react';
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
  const rCity = reminder[reminderIndex].reminderCity;
  const rTime = reminder[reminderIndex].reminderTime;
  const rColor = reminder[reminderIndex].reminderColor;
  return (
    <form>
      <div className="reminderCard centered">
        <div className="reminderCardPanel">
          <div className="weatherPanel weatherPanelStatic">
            <WeatherCard day={day} />
          </div>
        </div>
        <div className="reminderCardForm">
          <div className="reminderCardFormRow">
            <label className="reminderCardFormLabel">Text:</label>
            <input className="reminderCardFormInput" name="text" type="text" value={rText} onChange={event => setText(event, reminderIndex, dispatch)} required />
          </div>
          <div className="reminderCardFormRow">
            <label className="reminderCardFormLabel">City:</label>
            <input className="reminderCardFormInput" name="city" type="text" value={rCity} onChange={event => setCity(event, reminderIndex, dispatch)} required />
          </div>
          <div className="reminderCardFormRow">
            <label className="reminderCardFormLabel">Time:</label>
            <input className="reminderCardFormInput" name="time" type="time" value={rTime} onChange={event => setTime(event, reminderIndex, dispatch)} required />
          </div>
          <div className="reminderCardFormRow">
            <label className="reminderCardFormLabel">Color:</label>
            <input className="reminderCardFormInput" name="color" type="color" value={rColor} onChange={event => setColor(event, reminderIndex, dispatch)} required />
          </div>
          <div className="reminderCardFormDone">
            <input type="submit" className="reminderCardFormDoneButton button" onClick={event => showSetReminder(event, day, reminderIndex, dispatch)} />
          </div>
        </div>
      </div>

    </form>
  );
};

ReminderSet.propTypes = {
  reminderData: PropTypes.shape({
    reminderText: PropTypes.string,
    reminderCity: PropTypes.string,
    reminderTime: PropTypes.string,
    reminderColor: PropTypes.string,
  }),
};

ReminderSet = connect()(ReminderSet);

export default ReminderSet;
