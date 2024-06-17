import Entry from "../../io/entry";
import Service from "../../models/service";
import Delete from "../delete";
import Edit from "../edit";
import ShowServices from "../show/showService";

export default class EditService extends Edit{

    private services : Array<Service>;
    private entry : Entry;

    constructor( services : Array<Service>){
        super();
        this.services = services;
        this.entry = new Entry()
    }

    public edit(): void {
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
                selectedService.name = this.entry.getStr(`Por favor informe o nome do serviço: `)
                selectedService.price = this.entry.getNum(`Por favor informe o valor do serviço: `);

            console.log(`+-------------------------------------------+`)
            console.log(`|       Serviço editado com sucesso!        |`)
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