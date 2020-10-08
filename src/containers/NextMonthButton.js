import React from 'react';
import { connect } from 'react-redux';
import { nextMonth } from '../actions/actionCreators';

const gotoNextMonth = (dispatch, month) => dispatch(nextMonth(month));

let NextMonthButton = ({ month, dispatch }) => (
  <button type="button" className="next" onClick={() => gotoNextMonth(dispatch, month)}>&gt;</button>
);

NextMonthButton = connect()(NextMonthButton);

export default NextMonthButton;
