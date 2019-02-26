export const setPresidentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRESIDENTS':
      return action.presidents;
    default:
      return state;
  }
}