import { SET_MESSAGES } from '../actions/index';
import { CREATE_MESSAGE } from '../actions/index';
import { SET_CHANNEL } from '../actions/index';

export default function (state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case SET_CHANNEL:
      return action.payload.messages;
    case CREATE_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
