import { SETS_LOADED } from '../constants/action-types';

const initialState = {
  sets: [],
  cards: []
};

function rootReducer(state = initialState, action) {
  switch(action) {
    case SETS_LOADED:
      return Object.assign({}, state, {
        sets: state.sets.concat(action.payload)
      })
    default: return state;
  }
}

export default rootReducer;
