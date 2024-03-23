import DeleteClient from "../functions/delete/deleteClient";
import RegisterClient from "../functions/register/registerClient";
import ShowClients from "../functions/show/showClient";
import Entry from "../io/entry";
import Company from "../models/company";

export default class ClientConsole{
    company: Company;
    active:boolean;
    constructor(company:Company){
        this.company = company;
        this.active = true;
    }
    enter():void{
        while(this.active){
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Deletar cliente`);
            console.log(`4 - Atualizar cadastro do cliente`);
            console.log(`0 - Voltar`);
        
            let entry = new Entry();
            let option = entry.getNum(`Por favor, escolha uma opção: `);
    
            switch(option){
                case 1:
                    let reg = new RegisterClient(this.company.getClients)
                    reg.register()
                    break;
                case 2:
                    let show = new ShowClients(this.company.getClients)
                    show.show()
                    break;
                case 3:
                    let del = new DeleteClient(this.company.getClients)
                    del.delete()
                    break
                case 4:
                    
                    break
                case 0:
                    this.active = false
                    break;
                default:
                    console.log(`Opção inválida`)
                    break;
            }
        }
    }
   
}