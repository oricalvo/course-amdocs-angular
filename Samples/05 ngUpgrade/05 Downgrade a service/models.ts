interface Contact {
    id: number;
    name: string;
}

interface IAppService {
    contacts: Contact[];

    add(contact: Contact)
}
