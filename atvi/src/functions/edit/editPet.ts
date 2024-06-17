import Entry from "../../io/entry";
import Client from "../../models/client";
import Edit from "../edit";
import ShowClients from "../show/showClient";

export default class EditPet extends Edit{
    private clients : Array<Client>;
    private entry : Entry;
    constructor(clients : Array<Client>){
        super();
        this.clients = clients;
        this.entry = new Entry()
    }

    public edit(): void {
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showclients = new ShowClients(this.clients)
        showclients.show()
        console.log(`\n+-------------------------------------------+`)
        let selectedClientCPF = this.entry.getStr("| CPF do dono do pet a ser editado: ")
        console.log(`+-------------------------------------------+`)
        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        if (selectedClient != null ){
            if (selectedClient.getPets.length == 0) {
                console.log(`\n+-------------------------------------------+`)
                console.log(`|          Nenhum pet cadastrado            |`)
                console.log(`+-------------------------------------------+\n`)
                return
            }
            console.log(`+-------------------------------------------+`);
            console.log(`|                LISTA DE PET               |`)
            console.log(`+-------------------------------------------+`);
            
            selectedClient.getPets.forEach((pet,index) => {
                console.log(`| ID :` + (index + 1))
                console.log(`| NOME: ` + pet.getName ) ;
                console.log(`| GENÊRO: ` + pet.getGender);
                console.log(`| RAÇA: ` + pet.getRace);
                console.log(`| TIPO: ` + pet.getType);
            
                console.log(`+-------------------------------------------+`);
            });
            let selectedPetID = this.entry.getStr("| ID do pet a ser editado: ")
            console.log(`+-------------------------------------------+`)
            let selectedPet = selectedClient.getPets[parseInt(selectedPetID) - 1]
            if (selectedPet != null){
                selectedPet.setName(this.entry.getStr(`Por favor informe o nome do pet:  `))
                selectedPet.setRace(this.entry.getStr(`Por favor informe a raça do pet: `))
                selectedPet.setGender(this.entry.getStr(`Por favor informe o genero do pet: `))
                selectedPet.setType(this.entry.getStr(`Por favor informe o nome tipo de pet: `))
                console.log(`+-------------------------------------------+`)
                console.log(`|          Pet editado com sucesso!         |`)
                console.log(`+-------------------------------------------+\n`)
                return
            }
            else{
                console.log(`+-------------------------------------------+`)
                console.log(`|        Pet não encontrado!                |`)
                console.log(`+-------------------------------------------+\n`)
                return
            }

    }
}}