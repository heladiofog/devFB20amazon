
import express from 'express';
import {testApi} from '../controllers';

//Added from s1-002
import {authlogin} from '../controllers/auth';
import {createUser, patchUser, deleteUser} from '../controllers/controllerUsers';
import {verifyToken} from '../middlewares/midelware'
import {createCategory, getCategory, getProductByCategory} from '../controllers/controllerCategory';
import { create } from 'domain';
import {createProduct, getProducts, getById, getByCategoryId} from '../controllers/controllerProduct';

const router = express.Router();

//Prueba 
/**
 * @swagger
 * /test:
 *   get: 
 *     description: show server running
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: user email
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: password
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad request
 */

 //Este test prueba la función verifyToken, si es correcto, entra la función testApi
router.get('/test', verifyToken, testApi);
router.post('/login',  authlogin);

/**
 * @swagger
 * /users:
 *  post:
 *      tags: 
 *          - name: USERS
 *      description: Realiza el registro de un usuario nuevo
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: body
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      required: true
 *                      example: prueba@devf.com
 *                  password:
 *                      type: string
 *                      required: true
 *                      example: pass18*
 *                  name:
 *                      type: string
 *                      required: true
 *                      example: Antonio Salazar
 *      responses:
 *          201:
 *             description: devuelve un objeto json con los datos del usuario 
 *             schema:
 *             type: object
 *             properties:
 *                  email:
 *                      example: prueba@devf.com
 *                  password:
 *                      example: pass18*
 *                  name:
 *                      example: Antonio Salazar
 *          501:
 *             description: No se pudo crear la cuenta del usuario
 *             schema:
 *             type: object
 *             properties:   
 *                 message: 
 *                     example: error on create
 */
router.post('/users', createUser);
router.patch('/users', verifyToken, patchUser)
router.delete('/users', deleteUser);

/**
 * @swagger
 * /categories:
 *  post:
 *     tags:
 *         - name: CATEGORIES
 *     description: Crear Categorias de Productos
 *     produces:
 *         - application/json
 *     parameters:
 *         - name: body
 *           in: body
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *                 name: 
 *                    type: string
 *                    required: true
 *                    example: Electronicos
 *                 description:
 *                    type: string
 *                    required: true
 *                    example: Videojuevos, celulares
 *     responses:
 *         201:
 *            description: devuelve un objeto json con el nombre de la categoria y la descripcion de la misma
 *            schema:
 *            type: object
 *            properties:
 *                 name:
 *                    example: Videojuegos
 *                 description:
 *                    example: Juegos de video de las consolas XBOX ONE, Play Station 4, Nintento Switch
 *         501:
 *            description: No se pudo crear la Categoria
 *            schema:
 *            type: object
 *            properties:
 *                message:
 *                     example: error on create        
 */
router.post('/categories', createCategory);
router.get('/categories', getCategory)
router.get('/category/:uid', getProductByCategory)


/**
 * @swagger
 * /product:
 *  post:
 *      tags:
 *          - name: PRODUCTS
 *      description: Realiza el registro de un nuevo producto
 *      produces:
 *          application/jason
 *      parameters:
 *          - name: body
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  shortName: 
 *                      type: string
 *                      required: true
 *                      example: correa
 *                  name:
 *                      type: string
 *                      required: true
 *                      example: correa para perro 
 *                  description:
 *                      type: string
 *                      required: true
 *                      example: correa para perro 1 metro de largo, cordon uso rudo, collar cuero
 *                  unitPrice:
 *                      type: decimal
 *                      required: true
 *                      example: 200.75
 *                  itemSKU:
 *                      type: string
 *                      required: true
 *                      example: CORR2007520180531
 *                  stock:
 *                      type: integer
 *                      required: true
 *                      example: 350
 *                  image: 
 *                      type: string
 *                      example: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulF2j7aYSEFgndoOCS7OAXF4HDQj5iVDd937cdmdkakEPnrSA
 *                  CategoryId:
 *                      type: integer
 *                      example: 20128134567234FXDQ01239
 *                  status:
 *                      type: boolean
 *                      example: true
 *      responses:
 *          201:
 *              description: devuelve un objeto jason con los datos del producto
 *              schema:
 *              type: object
 *              properties:
 *                  shortName:
 *                      example: correa
 *                  name:
 *                      example: correa para perro 
 *                  description:
 *                      example: correa para perro 1 metro de largo, cordon uso rudo, collar cuero
 *                  unitPrice:
 *                      example: 200.75
 *                  itemSKU:
 *                      example: CORR2007520180531
 *                  stock:
 *                      example: 350
 *                  image: 
 *                      example: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulF2j7aYSEFgndoOCS7OAXF4HDQj5iVDd937cdmdkakEPnrSA
 *                  CategoryId:
 *                      example: 20128134567234FXDQ01239
 *                  status:
 *                      example: true
 *          501:
 *             description: No se pudo crear el producto
 *             schema:
 *             type: object
 *             properties:   
 *                 message: 
 *                     example: error on create * 
 */


/**
 * @swagger
 * /product:
 *  get:
 *      tags:
 *          - name: PRODUCTS
 *      description: Obtiene todos los productos
 *      produces:
 *          application/jason
 
 *      responses:
 *          product:
 *              description: devuelve un objeto jason con los datos del producto
 *              schema:
 *              type: object
 *              properties:
 *                  shortName:
 *                      example: correa
 *                  name:
 *                      example: correa para perro 
 *                  description:
 *                      example: correa para perro 1 metro de largo, cordon uso rudo, collar cuero
 *                  unitPrice:
 *                      example: 200.75
 *                  itemSKU:
 *                      example: CORR2007520180531
 *                  stock:
 *                      example: 350
 *                  image: 
 *                      example: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulF2j7aYSEFgndoOCS7OAXF4HDQj5iVDd937cdmdkakEPnrSA
 *                  CategoryId:
 *                      example: 20128134567234FXDQ01239
 *                  status:
 *                      example: true
 *          404:
 *             description: Servidor no encontrado
 *             schema:
 *             type: object
 *             properties:   
 *                 message: 
 *                     example: error on consult * 
 */ 


router.post('/product', createProduct);
router.get('/product', getProducts);
router.get('/product', getById);
router.get('/product', getByCategoryId)



export default router