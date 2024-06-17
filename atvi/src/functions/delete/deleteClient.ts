import Entry from "../../io/entry";
import Client from "../../models/client";
import Delete from "../delete";
import ShowClients from "../show/showClient";

export default class DeleteClient extends Delete{

    private clients : Array<Client>;
    private entry : Entry;

    constructor(clients : Array<Client>){
        super();
        this.clients = clients;
        this.entry = new Entry()
    }

    public delete(): void {
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showclients = new ShowClients(this.clients)
        showclients.show()
        
        console.log(`\n+-------------------------------------------+`)
        let selectedClientCPF = this.entry.getStr("| CPF do cliente a ser deletado: ")
        console.log(`+-------------------------------------------+`)
   
        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        if (selectedClient != null){
            this.clients.splice(this.clients.indexOf(selectedClient), 1)
            console.log(`+-------------------------------------------+`)
            console.log(`|       Cliente deletado com sucesso!       |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else{
            console.log(`+-------------------------------------------+`)
            console.log(`|       Cliente não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }

    }
}