import Client from "../../models/client";
import Show from "../show";

export default class ShowClients extends Show {
    private clients: Array<Client>
    constructor(clients: Array<Client>) {
        super()
        this.clients = clients
    }
    public show(): void {
        console.log(`+-------------------------------------------+`);
        console.log(`|              LISTA DE CLIENTES            |`)
        console.log(`+-------------------------------------------+`);
        this.clients.forEach(client => {
            console.log(`| Nome: ` + client.name ) ;
            console.log(`| Nome social: ` + client.socialName);
            console.log(`| CPF: ` + client.getCpf.getValue);
            for(let rg of client.getRgs){
                console.log(`| RG: ` + rg.getValue);
            }
            for(let telephone of client.getTelephones){
                console.log(`| Telefone: ` + telephone.getDdd +"-"+telephone.getNumber);
            }
            console.log(`+-------------------------------------------+`);
        });
        console.log(`\n`);
    }
}