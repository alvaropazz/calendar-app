import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Calendar from './Calendar';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
  render() {
    const { calendarData, reminderData } = this.props;
    return (
      <Calendar calendarData={calendarData} reminderData={reminderData} />
    );
  }
}

const mapStateToProps = state => ({
  calendarData: state.calendarReducer,
  reminderData: state.reminderReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
