import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { previousMonth } from '../actions/actionCreators';

const gotoPreviousMonth = (dispatch, month) => dispatch(previousMonth(month));

let PreviousMonthButton = ({ month, dispatch }) => (
  <button className="previous" onClick={() => gotoPreviousMonth(dispatch, month)}>&lt;</button>
);

PreviousMonthButton.propTypes = {
  month: PropTypes.number,
};

PreviousMonthButton = connect()(PreviousMonthButton);

export default PreviousMonthButton;
