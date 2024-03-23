import ClientConsole from "../console/clientConsole";
import RegisterClient from "../functions/register/registerClient";
import ShowClients from "../functions/show/showClient";
import Entry from "../io/entry";
import Company from "../models/company"

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)

let company = new Company();
let active  = true;

while (active){
    console.log(`Opções:`);
    console.log(`1 - Opções sobre Clientes`);
    console.log(`0 - Sair`);

    let entry = new Entry();
    let option = entry.getNum(`Por favor, escolha uma opção: `);

    switch(option){
        case 1:
            let clientconsole = new ClientConsole(company)
            clientconsole.enter()
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