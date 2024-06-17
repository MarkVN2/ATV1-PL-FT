import CPF from "./cpf"
import Pet from "./pet"
import Product from "./product"
import RG from "./rg"
import Service from "./service"
import Telephone from "./telephone"

export default class Client {
    public name: string
    public socialName: string
    private cpf: CPF
    private rgs: Array<RG>
    private registerDate: Date
    private telephones: Array<Telephone>
    private usedProducts: Array<Product>
    private usedServices: Array<Service>
    private pets: Array<Pet>
    constructor(name: string, socialName: string, cpf: CPF) {
        this.name = name
        this.socialName = socialName
        this.cpf = cpf
        this.rgs = []
        this.registerDate = new Date()
        this.telephones = []
        this.usedProducts = []
        this.usedServices = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getRegisterDate(): Date {
        return this.registerDate
    }
    public get getTelephones(): Array<Telephone> {
        return this.telephones
    }
    public get getUsedProducts(): Array<Product> {
        return this.usedProducts
    }
    public get getUsedServices(): Array<Service> {
        return this.usedServices
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public addPet(pet: Pet): void {
        this.pets.push(pet);
    };
    public addProduct(product: Product): void {
        if (this.usedProducts.find(p => p.getName == product.getName) != null){
            product.addQuantity(1)
            return        
        }
        else {
        this.usedProducts.push(product);
        product.addQuantity(1)
        }
    };
    public addService(service: Service): void { 
        if (this.usedServices.find(s => s.getName == service.getName) != null){
            service.addQuantity(1)
            return
        }
        else{
        this.usedServices.push(service);
        service.addQuantity(1)
        }
    };

}