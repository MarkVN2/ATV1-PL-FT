import Entry from "../../io/entry";
import Client from "../../models/client";
import Product from "../../models/product";
import Service from "../../models/service";
import Edit from "../edit";
import ShowClients from "../show/showClient";
import ShowProducts from "../show/showProduct";
import ShowServices from "../show/showService";

export default class EditClient extends Edit{
    public clients : Array<Client>
    public services?: Array<Service>
    public products? : Array<Product>
    public entry : Entry;
    constructor(clients : Array<Client>, products? : Array<Product>, services? : Array<Service>){
        super()
        this.clients = clients
        this.products = products || Product['']
        this.services = services || Service['']
        this.entry = new Entry()
    }
    
    public edit() : void {
        
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showclients = new ShowClients(this.clients)
        showclients.show()

        console.log(`\n+-------------------------------------------+`)
        let selectedClientCPF = this.entry.getStr("| CPF do cliente a ser editado: ")
        console.log(`+-------------------------------------------+`)
   
        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        if (selectedClient != null){
            selectedClient.name = this.entry.getStr(`Por favor informe o nome do cliente: `)
            selectedClient.socialName = this.entry.getStr(`Por favor informe o nome social do cliente: `)
            console.log(`|       Cliente editado com sucesso!        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else{
            console.log(`|       Cliente não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }

    }
    public addProduct() : void{
          
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showclients = new ShowClients(this.clients)
        showclients.show()

        console.log(`\n+-------------------------------------------+`)
        let selectedClientCPF = this.entry.getStr("| CPF do cliente a ter o produto adicionado: ")
        console.log(`+-------------------------------------------+`)

        let showproducts = new ShowProducts(this.products as Product[]);
        showproducts.show()
   
        let selectedProductID = this.entry.getStr("| ID do produto a ser adicionado: ")

        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        let selectedProduct = this.products?  this.products[parseInt(selectedProductID) - 1] : null
        
        if (selectedClient && selectedProduct){
            selectedClient.addProduct(selectedProduct)
            console.log(`+-------------------------------------------+`)
            console.log(`|       Produto adicionado com sucesso!     |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else if (!selectedClient){
            console.log(`+-------------------------------------------+`)
            console.log(`|       Cliente não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else if (!selectedProduct){
            console.log(`+-------------------------------------------+`)
            console.log(`|       Produto não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
    }
    public addService() : void{
          
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showclients = new ShowClients(this.clients)
        showclients.show()

        console.log(`\n+-------------------------------------------+`)
        let selectedClientCPF = this.entry.getStr("| CPF do cliente a ter o serviço adicionado: ")
        console.log(`+-------------------------------------------+`)

        let showservices = new ShowServices(this.services as Service[]);
        showservices.show()
   
        let selectedServiceID = this.entry.getStr("| ID do serviço a ser adicionado: ")

        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        let selectedService = this.services?  this.services[parseInt(selectedServiceID) - 1] : null
        
        if (selectedClient && selectedService){
            selectedClient.addService(selectedService)
            console.log(`+-------------------------------------------+`)
            console.log(`|       Serviço adicionado com sucesso!     |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else if (!selectedClient){
            console.log(`+-------------------------------------------+`)
            console.log(`|       Serviço não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else if (!selectedService){
            console.log(`+-------------------------------------------+`)
            console.log(`|       Serviço não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
    }
}