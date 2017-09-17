import {createStore} from "redux";

export interface Contact {
  id: number;
  name: string;
}

export interface AppState {
  contacts: Contact[];
}

function reducer(state: AppState, action): AppState {
  if (state == undefined) {
    return {
      contacts: [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"},
        {"id": 4, "name": "Tommy"},
      ]
    };
  }

  if(action.type == "REFRESH") {
    return {
      ... state,
      contacts: [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
      ]
    }
  }
}

export const appStore = createStore(reducer);
