import ClientConsole from "../console/clientConsole";
import RegisterClient from "../functions/register/registerClient";
import ShowClients from "../functions/show/showClient";
import Entry from "../io/entry";
import Company from "../models/company"

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)

let company = new Company();
let active  = true;

while (active){
 
    console.log("+-------------------------------------------+");
    console.log("|          1. OPÇÕES Cliente                |");
    console.log("|          2. OPÇÕES Produtos               |");
    console.log("|          3. OPÇÕES SERVIÇÕES              |");
    console.log("|          4. LISTAR +CONSUMIDOS            |");
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
            console.log(`Opção 2`)
            break;
        case 3:
            console.log(`Opção 3`)
            break;
        case 4:
            console.log(`Opção 4`)
            break;
        case 0:
            active = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Opção inválida`)
            break;
    }
}