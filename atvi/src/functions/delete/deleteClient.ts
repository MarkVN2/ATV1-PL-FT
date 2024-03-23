import Entry from "../../io/entry";
import Client from "../../models/client";
import Delete from "../delete";

export default class DeleteClient extends Delete{

    private clients : Array<Client>;
    private entry : Entry;

    constructor(clients : Array<Client>){
        super();
        this.clients = clients;
        this.entry = new Entry()
    }

    public delete(): void {
        console.log(`\nDeletar Cliente`);

    }
}