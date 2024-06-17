import ClientConsole from "../console/clientConsole";
import MostConsole from "../console/mostConsole";
import PetConsole from "../console/petConsole";
import ProductConsole from "../console/productConsole";
import ServicesConsole from "../console/servicesConsole";
import Entry from "../io/entry";
import Company from "../models/company"

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)

let company = new Company();
let active  = true;

while (active){
 
    console.log("+-------------------------------------------+");
    console.log("|          1. OPÇÕES CLIENTES               |");
    console.log("|          2. OPÇÕES PRODUTOS               |");
    console.log("|          3. OPÇÕES SERVIÇOS               |");
    console.log("|          4. OPÇÕES PETS                   |");
    console.log("|          5. LISTAR +CONSUMIDOS            |");
    console.log("|          0. Sair do programa              |");
    console.log("+-------------------------------------------+");

    let entry = new Entry();
    let option = entry.getNum(`Sua opção: `);

    switch(option){
        case 1:
            let clientconsole = new ClientConsole(company)
            clientconsole.enter()
            break;
        case 2:
            let productconsole = new ProductConsole(company)
            productconsole.enter()
            break;
        case 3:
            let servicesconsole = new ServicesConsole(company)
            servicesconsole.enter()
            break;
        case 4:
            let petconsole = new PetConsole(company)
            petconsole.enter()
            break;
        case 5:
            let mostconsole = new MostConsole(company)
            mostconsole.enter()
            break
        case 0:
            active = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Opção inválida`)
            break;
    }
}