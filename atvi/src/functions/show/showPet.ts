import Entry from "../../io/entry";
import Client from "../../models/client";
import Show from "../show";

export default class ShowPets extends Show {
    private clients: Array<Client>
    private entry : Entry;
    constructor(clients: Array<Client>) {
        super()
        this.clients = clients
        this.entry = new Entry()
    }
    public show(): void {
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        console.log(`+-------------------------------------------+`);
        console.log(`|                LISTA DE PET               |`)
        console.log(`+-------------------------------------------+`);
        this.clients.forEach(client => {
        
        if (client.getPets.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum pet cadastrado            |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }

        console.log(`+-------------------------------------------+`);
        console.log(`| DONO : ` + client.name)
        console.log(`+-------------------------------------------+`);
        client.getPets.forEach((pet,index) => {
            console.log(`|   ID :` + (index + 1))
            console.log(`|   NOME: ` + pet.getName ) ;
            console.log(`|   GENÊRO: ` + pet.getGender);
            console.log(`|   RAÇA: ` + pet.getRace);
            console.log(`|   TIPO: ` + pet.getType );
            console.log(`+-------------------------------------------+`);
        });
        
        console.log(`\n`);
        return
        });
    }
}