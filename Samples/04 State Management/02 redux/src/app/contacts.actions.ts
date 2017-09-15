import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Contact} from "./app.store";

@Injectable()
export class ContactsActions {
  constructor(private http: Http) {
  }

  reload(fromDate: Date) {
    return (dispatch, getState) => {
      this.http.get("/assets/contacts.json").subscribe(res => {
        const contacts = res.json();
        console.log(contacts);

        dispatch(this.setContacts(contacts));
      });
    }
  }

  setContacts(contacts: Contact[]) {
    return {
      type: "SET_CONTACTS",
      contacts,
    }
  }
}
