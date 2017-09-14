import {Directory} from "./appState";

export function fixFileSystemJson(dir: Directory) {
  return fixDirectory(dir, null);
}

function fixDirectory(dir: Directory, parent: Directory) {
  dir.parent = parent;

  if(parent) {
    dir.path = parent.path + "/" + dir.name;
  }

  for(let subDir of dir.items) {
    if(subDir.type == "dir") {
      fixDirectory(<Directory>subDir, dir);
    }
  }

  return dir;
}
