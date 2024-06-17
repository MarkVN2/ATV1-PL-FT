export default class Service{
    public name: string
    public price: number
    public quantity: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
        this.quantity = 0
    }

    public get getName(){
        return this.name
    }
    public get getPrice(){
        return this.price
    }
    public get getQuantity(){
        return this.quantity
    }
    public addQuantity(quantity: number){
        this.quantity += quantity
    }
}