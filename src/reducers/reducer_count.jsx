export default function (state = {count: null}, action) {
  switch (action.type) {
    case 'GET_NUMBER':
      return {
        ...state,
        count: action.payload
      };
    default:
      return state
  }

}