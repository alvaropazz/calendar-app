const NEXT_MONTH = 'NEXT_MONTH';
const PREVIOUS_MONTH = 'PREVIOUS_MONTH';

const SET_DAY = 'SET_DAY';
const SET_REMINDER = 'SET_REMINDER'; // togle planel
const DISPLAY_REMINDERS = 'DISPLAY_REMINDERS'; // toggle event list
const REMOVE_REMINDER = 'REMOVE_REMINDER';
const SET_REMINDER_TEXT = 'SET_REMINDER_TEXT';
const SET_REMINDER_CITY = 'SET_REMINDER_CITY';
const SET_REMINDER_TIME = 'SET_REMINDER_TIME';
const SET_REMINDER_COLOR = 'SET_REMINDER_COLOR';

export const nextMonth = month => ({
  type: NEXT_MONTH,
  month,
});

export const previousMonth = month => ({
  type: PREVIOUS_MONTH,
  month,
});

///

export const setDay = day => ({
  type: SET_DAY,
  day,
});

export const setReminder = (day, close, reminderIndex) => ({
  type: SET_REMINDER,
  day,
  close,
  reminderIndex,
});

export const displayReminders = day => ({
  type: DISPLAY_REMINDERS,
  day,
});

export const removeReminder = reminderIndex => ({
  type: REMOVE_REMINDER,
  reminderIndex,
});

export const setReminderText = (reminderText, reminderIndex) => ({
  type: SET_REMINDER_TEXT,
  reminderText,
  reminderIndex,
});

export const setReminderCity = (reminderCity, reminderIndex) => ({
  type: SET_REMINDER_CITY,
  reminderCity,
  reminderIndex,
});

export const setReminderTime = (reminderTime, reminderIndex) => ({
  type: SET_REMINDER_TIME,
  reminderTime,
  reminderIndex,
});

export const setReminderColor = (reminderColor, reminderIndex) => ({
  type: SET_REMINDER_COLOR,
  reminderColor,
  reminderIndex,
});
