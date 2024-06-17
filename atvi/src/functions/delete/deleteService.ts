import Entry from "../../io/entry";
import Service from "../../models/service";
import Delete from "../delete";
import ShowServices from "../show/showService";

export default class DeleteService extends Delete{

    private services : Array<Service>;
    private entry : Entry;

    constructor( services : Array<Service>){
        super();
        this.services = services;
        this.entry = new Entry()
    }

    public delete(): void {
        if (this.services.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum serviço cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showservices = new ShowServices(this.services)
        showservices.show()
        
        console.log(`\n+-------------------------------------------+`)
        let selectedServiceID = this.entry.getStr("| ID do serviço a ser deletado: ")
        console.log(`+-------------------------------------------+`)

        let selectedService = this.services[parseInt(selectedServiceID) - 1]
            if (selectedService != null){
            this.services.splice(this.services.indexOf(selectedService), 1)
            console.log(`+-------------------------------------------+`)
            console.log(`|       Serviço deletado com sucesso!       |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else{
            console.log(`+-------------------------------------------+`)
            console.log(`|       Serviço não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }

    }
}