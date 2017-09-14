import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Directory, Item} from "../common/appState";
import {fixFileSystemJson} from "../common/fsHelpers";

@Injectable()
export class AppActions {
  constructor(private http: Http) {
  }

  load() {
    return (dispatch) => {
      this.http.get("/assets/fileSystem.json").subscribe(res => {
        const fileSystem = res.json();

        dispatch({
          type: "SET_FILE_SYSTEM",
          fileSystem: fixFileSystemJson(fileSystem)
        });
      });
    }
  }

  activateItem(item: Item) {
    return function(dispatch) {
      if (item.type == "file") {
        return;
      }

      return dispatch({
        type: "GOTO_DIRECTORY",
        directory: item,
      });
    }
  }
}
