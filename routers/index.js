import express from 'express';
import { testApi } from '../controllers';

//Added from s1-002
import { authlogin } from '../controllers/auth';
import { createUser, patchUser, getById, deleteUser } from '../controllers/controllerUsers';
import { verifyToken } from '../middlewares/midelware'


//import from order S2-005

import { createOrder, getOrderById, patchOrderStatus } from '../controllers/controllerOrder';

const router = express.Router();

router.get('/test', verifyToken, testApi);

router.post('/login', authlogin);

/**
 * @swagger
 * /login:
 *  post:
 *      tags:
 *          - name: USERS
 *      description: Realiza login y devuelve token
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
 *                      example: prueba@mail.com
 *                  password:
 *                      type: string
 *                      required: true
 *                      example: pass18*
 *      responses:
 *          200:
 *              description: usuario logeado
 *              properties:
 *                  - name: token 
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNTI3MDMzMjQ4fQ.eCNBA8nkOn3QTe-TJBubRs_BzheLIzPCXYFwR8a86-Y
 * 
 * 
 *              
 *          400:
 *              description: datos invalidos
 *        
 */

router.post('/users', createUser);
router.patch('/users', verifyToken, patchUser)
router.delete('/users', deleteUser)

//endPointsOrder
router.post('/order', createOrder);
/**
 * @swagger
 * /order:
 *  post:
 *      tags:
 *          - name: ORDERS
 *      description: Create a order
 *      produces: 
 *          - application/json
 *      parameters:
 *          - name: body
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  idCart:
 *                      type: number
 *                      required: true
 *                      example: 1
 *      responses:
 *          200:
 *              description: order created
 *              properties:
 *                 id:  
 *                    type:integer
 *                    required:true
 *                    example:1
 *                 orderStatus:
 *                    type:enum
 *                    required:false
 *                    example:processing
 *                 paymethod:
 *                    type:string
 *                    required:true
 *                    example:paymethod
 *                 userId:
 *                    type:integer
 *                    required:true
 *                    example:2
 *                 cartId:
 *                    type:integer
 *                    required:true
 *                    example:3
 *                 orderId:
 *                    type:integer
 *                    required:true
 *                    example:4
 *                 totalPrice:
 *                    type:decimal
 *                    required:false
 *                    example:123.21
 *                                  
 *          400:
 *              description: error on controllers
 * 
 *          500:
 *              description: error on created
 *        
 */

router.get('/order/:id', getOrderById);
router.patch('/order', createOrder);

// router.get('/users', getById)


export default router;