export interface Directory {
  name: string;
  items: Item[];
  parent: Directory;
  type: string;
  path: string;
}

export interface File {
  name: string;
  type: string;
}

export type Item = Directory | File;

export interface AppState {
  directory: Directory;
}
