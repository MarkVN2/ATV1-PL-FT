import Product from "../../models/product";
import Show from "../show";

export default class ShowProducts extends Show {
    private products : Array<Product>;
    constructor(  products : Array<Product>) {
        super()
        this.products = products;
    }
    public show(): void {
        if (this.products.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum produto cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        console.log(`+-------------------------------------------+`);
        console.log(`|            LISTA DE PRODUTOS              |`)
        console.log(`+-------------------------------------------+`);
        this.products.forEach((product,index) => {
            console.log(`|   ID :` + (index + 1))
            console.log(`|   NOME: ` + product.getName ) ;
            console.log(`|   PREÇO: ` + product.getPrice);
            console.log(`+-------------------------------------------+`);
        });
        
        console.log(`\n`);
        return
        };
    }
