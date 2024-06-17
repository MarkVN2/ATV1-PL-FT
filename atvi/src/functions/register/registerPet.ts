import Entry from "../../io/entry";
import Client from "../../models/client";
import Pet from "../../models/pet";
import Register from "../register";
import ShowClients from "../show/showClient";

export default class RegisterPet extends Register{
    private clients : Array<Client>;
    private entry : Entry;

    constructor(clients : Array<Client>){
        super();
        this.clients = clients;
        this.entry = new Entry()
    }
    public register(): void {
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        console.log(`\n+-------------------------------------------+`)
        console.log(`|       Início do cadastro do pet           |`);
        console.log(`+-------------------------------------------+\n`);
        let showclients = new ShowClients(this.clients)
        showclients.show()
        
        let selectedClientCPF = this.entry.getStr(`Por favor informe o cpf do dono do pet: `)
        
        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        if (selectedClient != null){
        let name = this.entry.getStr(`Por favor informe o nome do pet: `)
        let race = this.entry.getStr(`Por favor informe a raça do pet: `);
        let gender = this.entry.getStr(`Por favor informe o genero do pet: `);
        let type = this.entry.getStr(`Por favor informe o nome tipo de pet: `)
        
        let pet = new Pet(name,race,gender,type );
        this.clients[this.clients.indexOf(selectedClient)].addPet(pet);
        console.log(this.clients[this.clients.indexOf(selectedClient)].getPets)
        console.log(`\n+-------------------------------------------+`)
        console.log(`|          Cadastro concluído :)            |`);
        console.log(`+-------------------------------------------+\n`)
        }
        else{
            console.log(`|          Dono não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
        }
         
    }
}