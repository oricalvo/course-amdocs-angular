import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux'

export interface Contact {
  id: number;
  name: string;
}

interface AppState {
  contacts: Contact[];
}

function reducer(state: AppState, action): AppState {
  if (state == undefined) {
    return {
      contacts: [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
      ],
    };
  }

  if (action.type == "RELOAD") {
    return reloadContacts(state);
  }

  if (action.type == "SET_CONTACTS") {
    return {
      contacts: action.contacts,
    }
  }

  return state;
}

function reloadContacts(state: AppState): AppState {
  return {
    contacts: [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ]
  };
}

export const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
));
