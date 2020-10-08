import React from 'react';
import { connect } from 'react-redux';
import { previousMonth } from '../actions/actionCreators';

const gotoPreviousMonth = (dispatch, month) => dispatch(previousMonth(month));

let PreviousMonthButton = ({ month, dispatch }) => (
  <button type="button" className="previous" onClick={() => gotoPreviousMonth(dispatch, month)}>&lt;</button>
);

PreviousMonthButton = connect()(PreviousMonthButton);

export default PreviousMonthButton;
