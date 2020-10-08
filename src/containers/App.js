import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import Calendar from './Calendar';
import * as actionCreators from '../actions/actionCreators';

const App = props => {
  const { calendarData, reminderData } = props;
  return (
    <Calendar calendarData={calendarData} reminderData={reminderData} />
  );
};

const mapStateToProps = state => ({
  calendarData: state.calendarReducer,
  reminderData: state.reminderReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
