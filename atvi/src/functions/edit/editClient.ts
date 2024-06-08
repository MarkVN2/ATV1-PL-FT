import Entry from "../../io/entry";
import Client from "../../models/client";
import Edit from "../edit";

export default class EditClient extends Edit{
    public clients : Array<Client>
    public entry : Entry;
    constructor(clients : Array<Client>){
        super()
        this.clients = clients
        this.entry = new Entry()
    }
    
    public edit() : void {
        console.log("Method not implemented")
    }
}