import Entry from "../../io/entry";
import Service from "../../models/service";
import Register from "../register";

export default class RegisterService extends Register{
    private services : Array<Service>;
    private entry : Entry;

    constructor(services : Array<Service>){
        super();
        this.services = services;
        this.entry = new Entry()
    }
    
    public register(): void {
        console.log(`\n+-------------------------------------------+`)
        console.log(`| Início do cadastro de serviço             |`);
        console.log(`+-------------------------------------------+`);
        
        let nome = this.entry.getStr(`Por favor informe o nome do serviço: `)
        let value = this.entry.getNum(`Por favor informe o valor do serviço: `);

        let service = new Service(nome,value);
        
        this.services.push(service)
        console.log(`\n+-------------------------------------------+`)
        console.log(`|          Cadastro concluído :)            |`);
        console.log(`+-------------------------------------------+\n`)
    }
}