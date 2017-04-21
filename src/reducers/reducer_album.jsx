const INITIAL_STATE = {all: [], album: null};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_ALBUM':
      return {
        ...state,
        album: action.payload
      };
    case 'FETCH_ALBUMS':
      return {
        ...state,
        all: action.payload
      };
    default:
      return state
  }
};
