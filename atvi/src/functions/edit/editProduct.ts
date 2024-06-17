import Entry from "../../io/entry";
import Product from "../../models/product";
import Edit from "../edit";
import ShowProducts from "../show/showProduct";

export default class EditProduct extends Edit{

    private products : Array<Product>;
    private entry : Entry;

    constructor( products : Array<Product>){
        super();
        this.products = products;
        this.entry = new Entry()
    }

    public edit(): void {
        if (this.products.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum produto cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        let showproducts = new ShowProducts(this.products)
        showproducts.show()
        
        console.log(`\n+-------------------------------------------+`)
        let selectedProductID = this.entry.getStr("| ID do produto a ser editado: ")
        console.log(`+-------------------------------------------+`)

        let selectedProduct = this.products[parseInt(selectedProductID) - 1]
            if (selectedProduct != null){
                selectedProduct.name = this.entry.getStr(`Por favor informe o nome do produto: `)
                selectedProduct.price = this.entry.getNum(`Por favor informe o valor do produto: `);
            
            console.log(`+-------------------------------------------+`)
            console.log(`|       Produto editado com sucesso!        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        else{
            console.log(`+-------------------------------------------+`)
            console.log(`|       Produto não encontrado!             |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }

    }
}