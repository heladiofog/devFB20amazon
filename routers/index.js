import express from 'express';
import {testApi} from '../controllers';

//Added from s1-002
import {authlogin} from '../controllers/auth';
import {createUser, patchUser, getById, deleteUser} from '../controllers/controllerUsers';
import {verifyToken} from '../middlewares/midelware'

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
 *              type: oject
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
 *             description: usuario loggeado
 *          400:
 *              description: datos invalidos
 */
router.post('/login',  authlogin);
router.post('/users', createUser);

/**
 * @swagger
 * /users:
 *  patch:
 *      tags:
 *          - name: USERS
 *      description: Un usuario puede modificar sus datos 
 *      produces: 
 *          - application/json
 *      parameters:
 *          - name: body
 *            in: body
 *            required: false
 *            schema:
 *              type: object
 *              properties:
 *                  gender:
 *                      type: string
 *                      required: false
 *                      example: Masculino
 *                  birdthDate:
 *                      type: unix timestamp
 *                      required: false
 *                      example: 1528766636
 *      responses:
 *          202:
 *             description: usuario modificado
 *          400:
 *              description: datos invalidos
 */
router.patch('/users', verifyToken, patchUser)

/**
 * @swagger
 * /users:
 *  delete:
 *      tags:
 *          - name: USERS
 *      description: Un usuario puede eliminar su cuenta 
 *      produces: 
 *          - application/json
 *      parameters:
 *          - name: Authorization
 *            in: Headers
 *            required: true
 *            type: Bearer
 *            description: Bearer $token
 *            
 *              
 *              
 *      responses:
 *          200:
 *             description: usuario eliminado
 *          403:
 *              description: Header is undefined
 */
router.delete('/users', verifyToken, deleteUser)

// router.get('/users', getById)


export default router

