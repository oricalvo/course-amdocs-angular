export interface AppState {
  contacts: Contact[];
  all: Contact[];
  filterStr: string;
}

export interface Contact {
  id: number;
  name: string;
}
