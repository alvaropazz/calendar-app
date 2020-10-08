import moment from 'moment';

const initialState = {
  day: moment(),
  setRemindersDisplay: false,
  showRemindersDisplay: false,
  reminders: {},
};

const addReminder = (state, action) => {
  const reminderKey = action.day.format('DD-MM-YYYY');
  const isOpen = !state.setRemindersDisplay;
  let newState = { ...state, setRemindersDisplay: isOpen };
  if (!newState.reminders[reminderKey]) newState.reminders[reminderKey] = [];

  if (action.close) {
    newState.reminders[reminderKey] = newState.reminders[reminderKey].filter(value => Object.keys(value).length > 0);
    newState = { ...state, reminders: newState.reminders, setRemindersDisplay: isOpen };
  }

  if (isOpen) {
    newState.reminders[reminderKey].push({});
    newState = { ...state, reminders: newState.reminders, setRemindersDisplay: isOpen };
  }

  return newState;
};

const setReminderText = (state, action) => {
  const reminderKey = state.day.format('DD-MM-YYYY');
  const { reminderIndex } = action;
  const newState = { ...state };
  if (!newState.reminders[reminderKey][reminderIndex]) newState.reminders[reminderKey][reminderIndex] = {};
  newState.reminders[reminderKey][reminderIndex].reminderText = action.reminderText;
  return { ...state, reminders: newState.reminders };
};

const setReminderCity = (state, action) => {
  const reminderKey = state.day.format('DD-MM-YYYY');
  const { reminderIndex } = action;
  const newState = { ...state };
  if (!newState.reminders[reminderKey][reminderIndex]) newState.reminders[reminderKey][reminderIndex] = {};
  newState.reminders[reminderKey][reminderIndex].reminderCity = action.reminderCity;
  return { ...state, reminders: newState.reminders };
};

const setReminderTime = (state, action) => {
  const reminderKey = state.day.format('DD-MM-YYYY');
  const { reminderIndex } = action;
  const newState = { ...state };
  if (!newState.reminders[reminderKey][reminderIndex]) newState.reminders[reminderKey][reminderIndex] = {};
  newState.reminders[reminderKey][reminderIndex].reminderTime = action.reminderTime;
  return { ...state, reminders: newState.reminders };
};

const setReminderColor = (state, action) => {
  const reminderKey = state.day.format('DD-MM-YYYY');
  const { reminderIndex } = action;
  const newState = { ...state };
  if (!newState.reminders[reminderKey][reminderIndex]) newState.reminders[reminderKey][reminderIndex] = {};
  newState.reminders[reminderKey][reminderIndex].reminderColor = action.reminderColor;
  return { ...state, reminders: newState.reminders };
};

const removeReminder = (state, action) => {
  const reminderKey = state.day.format('DD-MM-YYYY');
  const { reminderIndex } = action;
  const newState = { ...state };
  if (reminderIndex !== -1) newState.reminders[reminderKey].splice(reminderIndex, 1);
  return { ...state, reminders: newState.reminders };
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DAY':
      return { ...state, day: action.day };
    case 'DISPLAY_REMINDERS':
      return { ...state, showRemindersDisplay: !state.showRemindersDisplay };
    case 'SET_REMINDER':
      return addReminder(state, action);
    case 'SET_REMINDER_TEXT':
      return setReminderText(state, action);
    case 'SET_REMINDER_CITY':
      return setReminderCity(state, action);
    case 'SET_REMINDER_TIME':
      return setReminderTime(state, action);
    case 'SET_REMINDER_COLOR':
      return setReminderColor(state, action);
    case 'REMOVE_REMINDER':
      return removeReminder(state, action);
    default:
      return state;
  }
};

export default reminderReducer;
