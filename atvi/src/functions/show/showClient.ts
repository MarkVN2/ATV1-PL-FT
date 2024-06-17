import Client from "../../models/client";
import Show from "../show";

export default class ShowClients extends Show {
    private clients: Array<Client>
    constructor(clients: Array<Client>) {
        super()
        this.clients = clients
    }
    public show(): void {
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        console.log(`+-------------------------------------------+`);
        console.log(`|              LISTA DE CLIENTES            |`)
        console.log(`+-------------------------------------------+`);
        this.clients.forEach(client => {
            console.log(`| CPF: ` + client.getCpf.getValue);
            console.log(`|  Nome: ` + client.name ) ;
            console.log(`|  Nome social: ` + client.socialName);
            for(let rg of client.getRgs){
                console.log(`|  RG: ` + rg.getValue);
            }
            for(let telephone of client.getTelephones){
                console.log(`|  Telefone: ` + telephone.getDdd +"-"+telephone.getNumber);
            }
            client.getPets.forEach(pet => {
                console.log(`|   PET: ` + pet.getName);
                console.log(`|   RAÇA: ` + pet.getRace);	
                console.log(`|   GENERO: ` + pet.getGender);
            });
            if(client.getUsedProducts.length > 0 ){
            console.log(`|     PRODUTOS USADOS    `);
            client.getUsedProducts.forEach(product => {
                console.log(`|     PRODUTO: ` + product.getName);
                console.log(`|     QUANTIDADE: ` + product.getQuantity);
            });
            }
            if(client.getUsedServices.length > 0 ){
                console.log(`|     SERVIÇOS USADOS    `);
            client.getUsedServices.forEach(service => {
                console.log(`|     SERVIÇO: ` + service.getName);
                console.log(`|     PREÇO: ` + service.getPrice);
            });
            }   
            console.log(`+-------------------------------------------+`);
        });
    }
    public show10():void {
        console.log(`+-------------------------------------------+`);
        console.log(`|         LISTA DE MAIS CONSUMOS            |`)
        console.log(`|                CLIENTE                    |`)
        console.log(`+-------------------------------------------+`);
        let temp : any = [];
        this.clients.forEach(client => {
            let amount = 0;
            client.getUsedProducts.forEach(product => {
                amount += product.getQuantity
            })
            client.getUsedServices.forEach(service => {
                amount += service.getQuantity
            })
            temp.push({name: client.name, cpf: client.getCpf.getValue, amount: amount})
        })
        temp.sort((a,b) => {
            if(a.amount > b.amount) return -1;
            if(a.amount < b.amount) return 1;
            return 0;
        })
        temp.slice(0,10).forEach(client => {
            console.log(`| CPF: ` + client.cpf);
            console.log(`|  Nome: ` + client.name ) ;
            console.log(`|  Quantidade: ` + client.amount);
        });
        console.log(`+-------------------------------------------+`);
    }
    public show5():void{
        console.log(`+-------------------------------------------+`);
        console.log(`|         LISTA DE MAIS CONSUMOS            |`)
        console.log(`|                VALOR                      |`)
        console.log(`+-------------------------------------------+`);
        let temp : any = [];

        this.clients.forEach(client => {
            let amount = 0;
            client.getUsedProducts.forEach(product => {
                amount += product.getPrice * product.getQuantity
            })
            client.getUsedServices.forEach(service => {
                amount += service.getPrice * service.getQuantity
            })
            temp.push({name: client.name, cpf: client.getCpf.getValue, amount: amount})
        })

        temp.sort((a,b) => {
            if(a.amount > b.amount) return -1;
            if(a.amount < b.amount) return 1;
            return 0;
        })

        temp.slice(0,5).forEach(client => {
            console.log(`| CPF: ` + client.cpf);
            console.log(`|  Nome: ` + client.name ) ;
            console.log(`|  Valor: ` + client.amount);
        });

        console.log(`+-------------------------------------------+`);
    }
}