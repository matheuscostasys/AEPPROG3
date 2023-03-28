// 15 - Importamos o Router do Express
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import productController from './controller/productController'
// 16 - criamos uma constante chamada routes e atribuimos a ela uma instancia de Router()
const routes = Router()

// 17 - Estamos Utilizando o método get de Router() e passando como paramêtro o nome da rota, e o que será executado quando ela for chamada
routes.get('/health-check', healthCheckController.check)
routes.post('/products',productController.createProduct)
routes.get('/products', productController.getProduct)
routes.get('/products-stock',productController.getProduct_Stock)
routes.get('/total-stock',productController.getTotalStock)
routes.get('/reduce',productController.getReduce)
// 18 - estamos exportando a constante routes
export default routes