const updateState1AC = value => {
  return async dispatch => {
    for(let i = 0; i < 100000000; i++) {
     const a = 6;
     const b = 7;
     const c = a + b;
    }

    dispatch({ type: 'UPDATE_STATE1', payload: {value} });
  };
};

const updateState1WithDelayAC = value => {
  return async dispatch => {
    setTimeout(() => dispatch({ type: 'UPDATE_STATE1', payload: {value} }), 1000);
  };
};

export { updateState1AC, updateState1WithDelayAC };
