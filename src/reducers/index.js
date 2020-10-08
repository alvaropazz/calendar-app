import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reminderReducer from './reminderReducer';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
  reminderReducer,
  calendarReducer,
  routing: routerReducer,
});

export default rootReducer;
