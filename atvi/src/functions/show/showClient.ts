import Client from "../../models/client";
import Show from "../show";

export default class ShowClients extends Show {
    private clients: Array<Client>
    constructor(clients: Array<Client>) {
        super()
        this.clients = clients
    }
    public show(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clients.forEach(client => {
            console.log(`Nome: ` + client.name);
            console.log(`Nome social: ` + client.socialName);
            console.log(`CPF: ` + client.getCpf.getValue);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}