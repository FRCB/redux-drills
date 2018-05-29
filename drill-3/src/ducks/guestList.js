const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}

const ADD_GUEST = 'ADD_GUEST';
const DELETE_GUEST = 'DELETE_GUEST';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, { guests: [...state.guests, action.payload] });
    case DELETE_GUEST:
      return Object.assign({}, state, { guests: state.guests.splice(action.payload, 1) });;
    default:
      return state
  }
}

export function addGuest(guestname) {
  return {
    type: ADD_GUEST,
    payload: guestname
  }
}

export function deleteGuest(i) {
  return {
    type: ADD_GUEST,
    payload: i
  }
}
