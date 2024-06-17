import Entry from "../../io/entry";
import Product from "../../models/product";
import Delete from "../delete";
import ShowProducts from "../show/showProduct";
import ShowServices from "../show/showService";

export default class DeleteProduct extends Delete{

    private products : Array<Product>;
    private entry : Entry;

    constructor( products : Array<Product>){
        super();
        this.products = products;
        this.entry = new Entry()
    }

    public delete(): void {
        if (this.products.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum produto cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showproducts = new ShowProducts(this.products)
        showproducts.show()
        
        console.log(`\n+-------------------------------------------+`)
        let selectedProductID = this.entry.getStr("| ID do produto a ser deletado: ")
        console.log(`+-------------------------------------------+`)

        let selectedProduct = this.products[parseInt(selectedProductID) - 1]
            if (selectedProduct != null){
            this.products.splice(this.products.indexOf(selectedProduct), 1)
            console.log(`+-------------------------------------------+\n`)
            console.log(`|       Produto deletado com sucesso!       |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else{
            console.log(`+-------------------------------------------+\n`)
            console.log(`|       Produto não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }

    }
}