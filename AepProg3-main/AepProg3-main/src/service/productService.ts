import {writeFile,readFile} from 'fs/promises'


class ProductService{

    async createProductList(data){
        try{
            await writeFile('products.json',JSON.stringify(data))
        }catch(err){
            throw new Error('Falha ao salvar produtos')
        }
    }

    async getProducts(){
        
        try {
            const readProduct = await readFile('products.json','utf-8')
            return JSON.parse(readProduct)
        } catch (error) {
            throw new Error('arquivo errado ')
        }
    }

    async getStock(){
        try {
            const product = await this.getProducts()
            const productList=product.map((item)=>{
                return{
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco,
                    valor_stock: item.preco*item.qtde
                }
            })
            return productList; 
        } catch (error) {
            throw new Error(' arquivo errado')
        }
    }

    async getStockValue(){
        try {
            const product = await this.getStock()
            const product_stock = product.reduce((totalValue, value)=>{
                return (totalValue + value.valor_stock)
            },0
            ).toFixed(2)
        return JSON.parse(product_stock)
        
        } catch (error) {
            console.log("deu certo não tente novamente")
        }
    }
}

export default new ProductService();