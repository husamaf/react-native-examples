import produce from 'immer'; // Easily (and immutably) update deep states

export const initialState = {
  value: 0
};

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATE2': {
      const {value} = action.payload;
      draft.value = value;
    }
    default: {
      return draft;
    }
  }
});
