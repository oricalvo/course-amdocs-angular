import {AppState, Directory, Item} from "../common/appState";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
  state: AppState;

  constructor(private http: Http) {
    this.state = {
      directory: null,
    }
  }

  load() {
    this.http.get("/assets/fileSystem.json").subscribe(res => {
      const fileSystem = res.json();

      this.state.directory = fixParent(fileSystem, null);
    });
  }

  gotoParent() {
    this.state.directory = this.state.directory.parent;
  }

  activateItem(item: Item) {
    if(item.type!="dir") {
      return;
    }

    this.state.directory = item as Directory;
  }
}

export function fixParent(dir: Directory, parent: Directory) {
  dir.parent = parent;

  if(parent) {
    dir.path = parent.path + "/" + dir.name;
  }

  for(let subDir of dir.items) {
    if(subDir.type == "dir") {
      fixParent(<Directory>subDir, dir);
    }
  }

  return dir;
}
