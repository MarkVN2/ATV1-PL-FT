import DeleteClient from "../functions/delete/deleteClient";
import EditClient from "../functions/edit/editClient";
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
            console.log("+-------------------------------------------+");
            console.log("|          1. INSERIR   Cliente             |");
            console.log("|          2. EXCLUIR   Cliente             |");
            console.log("|          3. EDITAR    Cliente             |");
            console.log("|          4. LISTAR    Clientes            |");
            console.log("|          5. SOBRE PETS                    |");
            console.log("|          0. Voltar                        |");
            console.log("+-------------------------------------------+");
        
            let entry = new Entry();
            let option = entry.getNum(`Por favor, escolha uma opção: `);
    
            switch(option){
                case 1:
                    let reg = new RegisterClient(this.company.getClients)
                    reg.register()
                    break;
                case 2:
                    let del = new DeleteClient(this.company.getClients)
                    del.delete()
                    break;
                case 3:
                    let edit = new EditClient(this.company.getClients)
                    edit.edit();
                    break
                case 4:
                    let show = new ShowClients(this.company.getClients)
                    show.show()
                    break
                case 5:
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