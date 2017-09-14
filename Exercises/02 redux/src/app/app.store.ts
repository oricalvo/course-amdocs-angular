import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {AppState, Directory} from "./common/appState";

function reducer(state: AppState, action): AppState {
  if(state == undefined) {
    return {
      directory: {
        type: "dir",
        name: "Ori",
        items: [],
        path: "/",
        parent: null,
      }
    }
  }

  if(action.type == "SET_FILE_SYSTEM") {
    return setFileSystem(state, action.fileSystem);
  }

  if(action.type == "GOTO_DIRECTORY") {
    return gotoDirectory(state, action.directory);
  }

  return state;
}

function setFileSystem(state: AppState, dir: Directory): AppState {
  return {
    directory: dir
  };
}

function gotoDirectory(state: AppState, dir: Directory): AppState {
  return {
    ... state,
    directory: dir
  };
}

export const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
));
