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
    public get getusedProducts(): Array<Product> {
        return this.usedProducts
    }
    public get getusedServices(): Array<Service> {
        return this.usedServices
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

}