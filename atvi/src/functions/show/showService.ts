import Entry from "../../io/entry";
import Service from "../../models/service";
import Show from "../show";

export default class ShowServices extends Show {
    private services : Array<Service>;
    constructor(  services : Array<Service>) {
        super()
        this.services = services;
    }
    public show(): void {
        if (this.services.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum serviço cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        console.log(`+-------------------------------------------+`);
        console.log(`|            LISTA DE SERVIÇOS              |`)
        console.log(`+-------------------------------------------+`);
        this.services.forEach((service,index) => {
            console.log(`|   ID :` + (index + 1))
            console.log(`|   NOME: ` + service.getName ) ;
            console.log(`|   PREÇO: ` + service.getPrice);
            console.log(`+-------------------------------------------+`);
        });
        
        console.log(`\n`);
        return
        };
    }
