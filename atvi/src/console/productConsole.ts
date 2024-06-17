import DeletePet from "../functions/delete/deletePet";
import DeleteProduct from "../functions/delete/deleteProduct";
import EditClient from "../functions/edit/editClient";
import EditPet from "../functions/edit/editPet";
import EditProduct from "../functions/edit/editProduct";
import RegisterPet from "../functions/register/registerPet";
import RegisterProduct from "../functions/register/registerProduct";
import ShowPets from "../functions/show/showPet";
import ShowProducts from "../functions/show/showProduct";
import Entry from "../io/entry";
import Company from "../models/company";
import ShopConsole from "./shopconsole";

export default class ProductConsole implements ShopConsole{
    company: Company;
    active:boolean;
    constructor(company:Company){
        this.company = company;
        this.active = true;
    }
    enter():void{
        while(this.active){
            console.log("+-------------------------------------------+");
            console.log("|          1. INSERIR   Produto             |");
            console.log("|          2. EXCLUIR   Produto             |");
            console.log("|          3. EDITAR    Produto             |");
            console.log("|          4. CHAMAR    Produto             |");
            console.log("|          5. LISTAR    Produtos            |");
            console.log("|          0. Voltar                        |");
            console.log("+-------------------------------------------+");
        
            let entry = new Entry();
            let option = entry.getNum(`Por favor, escolha uma opção: `);
    
            switch(option){
                case 1:
                    let reg = new RegisterProduct(this.company.getProducts)
                    reg.register()
                    break;
                case 2:
                    let del = new DeleteProduct(this.company.getProducts)
                    del.delete()
                    break;
                case 3:
                    let edit = new EditProduct(this.company.getProducts)
                    edit.edit();
                    break
                case 4:
                    let editclient  = new EditClient(this.company.getClients,this.company.getProducts)
                    editclient.addProduct()
                    break
                case 5:
                    let showproducts = new ShowProducts(this.company.getProducts)
                    showproducts.show()
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