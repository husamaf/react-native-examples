const updateState2AC = value => {
  return async dispatch => {
    dispatch({ type: 'UPDATE_STATE2', payload: {value} });
  };
};

const updateState2WithDelayAC = value => {
  return async dispatch => {
    setTimeout(() => dispatch({ type: 'UPDATE_STATE2', payload: {value} }), 1000);
  };
};

export { updateState2AC, updateState2WithDelayAC };
