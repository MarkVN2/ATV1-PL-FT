import Entry from "../../io/entry";
import Client from "../../models/client";
import CPF from "../../models/cpf";
import Register from "../register";

export default class RegisterClient extends Register{
    private clients : Array<Client>;
    private entry : Entry;

    constructor(clients : Array<Client>){
        super();
        this.clients = clients;
        this.entry = new Entry()
    }
    
    public register(): void {
        console.log(`\n+-------------------------------------------+`)
        console.log(`| Início do cadastro do cliente             |`);
        console.log(`+-------------------------------------------+`);
        let nome = this.entry.getStr(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entry.getStr(`Por favor informe o nome social do cliente: `)
        let value = this.entry.getStr(`Por favor informe o número do cpf: `);
        let date = this.entry.getStr(`Por favor informe a data de emissão do cpf, no padrão dd/mm/aaaa: `);
        
        let dateSlices = date.split('/')

        let year = new Number(dateSlices[2].valueOf()).valueOf()
        let month = new Number(dateSlices[1].valueOf()).valueOf()
        let day = new Number(dateSlices[0].valueOf()).valueOf()
        
        let registerDate = new Date(year, month, day)
        let cpf = new CPF(value, registerDate);
        
        let client = new Client(nome, nomeSocial, cpf);
        
        this.clients.push(client)
        console.log(`\n+-------------------------------------------+`)
        console.log(`|          Cadastro concluído :)            |`);
        console.log(`+-------------------------------------------+\n`)
    }
}