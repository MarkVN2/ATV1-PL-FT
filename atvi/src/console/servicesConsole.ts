import DeletePet from "../functions/delete/deletePet";
import DeleteService from "../functions/delete/deleteService";
import EditClient from "../functions/edit/editClient";
import EditPet from "../functions/edit/editPet";
import EditService from "../functions/edit/editService";
import RegisterPet from "../functions/register/registerPet";
import RegisterService from "../functions/register/registerService";
import ShowPets from "../functions/show/showPet";
import ShowServices from "../functions/show/showService";
import Entry from "../io/entry";
import Company from "../models/company";
import ShopConsole from "./shopconsole";

export default class ServicesConsole implements ShopConsole{
    company: Company;
    active:boolean;
    constructor(company:Company){
        this.company = company;
        this.active = true;
    }
    enter():void{
        while(this.active){
            console.log("+-------------------------------------------+");
            console.log("|          1. INSERIR   Serviço             |");
            console.log("|          2. EXCLUIR   Serviço             |");
            console.log("|          3. EDITAR    Serviço             |");
            console.log("|          4. CHAMAR    Serviço             |");
            console.log("|          5. LISTAR    Serviços            |");
            console.log("|          0. Voltar                        |");
            console.log("+-------------------------------------------+");
        
            let entry = new Entry();
            let option = entry.getNum(`Por favor, escolha uma opção: `);
    
            switch(option){
                case 1:
                    let reg = new RegisterService(this.company.getServices)
                    reg.register()
                    break;
                case 2:
                    let del = new DeleteService(this.company.getServices)
                    del.delete()
                    break;
                case 3:
                    let edit = new EditService(this.company.getServices)
                    edit.edit();
                    break
                case 4:
                    let editclient  = new EditClient(this.company.getClients,this.company.getProducts,this.company.getServices)
                    editclient.addService()
                    break
                case 5:
                    let show = new ShowServices(this.company.getServices)
                    show.show()
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