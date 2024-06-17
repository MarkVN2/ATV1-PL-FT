import DeletePet from "../functions/delete/deletePet";
import EditPet from "../functions/edit/editPet";
import RegisterPet from "../functions/register/registerPet";
import ShowClients from "../functions/show/showClient";
import ShowPets from "../functions/show/showPet";
import Entry from "../io/entry";
import Company from "../models/company";
import ShopConsole from "./shopconsole";

export default class MostConsole implements ShopConsole{
    company: Company;
    active:boolean;
    constructor(company:Company){
        this.company = company;
        this.active = true;
    }
    enter():void{
        while(this.active){
            console.log("+-------------------------------------------+");
            console.log("|   1. LISTAR 5+ CONSUMIDO POR NUMERO       |");
            console.log("|   2. LISTAR 10+ CONSUMIDO POR VALOR       |");
            console.log("|          0. Voltar                        |");
            console.log("+-------------------------------------------+");
        
            let entry = new Entry();
            let option = entry.getNum(`Por favor, escolha uma opção: `);
    
            switch(option){
                case 1:
                    let show10 = new ShowClients(this.company.getClients)
                    show10.show10()
                    break;
                case 2:
                    let show5 = new  ShowClients(this.company.getClients)
                    show5.show5()
                    break;
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