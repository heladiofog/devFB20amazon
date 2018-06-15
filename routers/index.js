import express from 'express';
import {testApi} from '../controllers';

//Added from s1-002
import {authlogin} from '../controllers/auth';
import {createUser, patchUser, getById, deleteUser} from '../controllers/controllerUsers';
import {verifyToken} from '../middlewares/midelware'
import {createAddress,getAllById} from '../controllers/controllerAddress';

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
router.post('/users', createUser);
router.patch('/users', verifyToken, patchUser)
router.delete('/users', deleteUser)
/**
 * @swagger
 *  /address:
 *      post:
 *          tags:
 *             - name: ADDRESS          
 *          description: Crea una direccion perteneciente al usuario en la base de datos
 *          produces:
 *              -application/json
 *          parameters:
 *              - name: body
 *                in: body
 *                type: object
 *                required: true
 *                schema:
 *                    type: object
 *                    properties:
 *                        street:
 *                         type: string
 *                         required: true
 *                         example: Prol. Diamante
 *                        district:
 *                         type: string
 *                         required: false
 *                         example: Unidad y Progreso
 *                        numExt:
 *                         type: string
 *                         required: false
 *                         example: 1
 *                        numInt:
 *                         type: string
 *                         required: false
 *                         example: 1
 *                        city:
 *                         type: string
 *                         required: true
 *                         example: Xalapa
 *                        country:
 *                         type: string
 *                         required: true
 *                         example: Veracruz
 *                        cc:
 *                         type: integer
 *                         required: true
 *                         example: 91020
 *                        UserId:
 *                         type: integer
 *                         required: true
 *                         example: 1
 *          responses:
 *              201:
 *                  description: Dirección guardada
 *              400:
 *                  description: Error
 */
router.post('/address', verifyToken, createAddress)
/**
 *  @swagger
 *      /address:
 *          get:
 *              tags:
 *                  - name: ADDRESS
 *              description: Cosulta todas las direcciones relacionada a un usuario
 *              produces: aplication/json
 *              parameters:
 *                  - name: token
 *                    in: header
 *                    type: object
 *                    required: true
 *              responses:
 *                  schema:
 *                    type: object
 *                    properties:
 *                        street:
 *                         example: Prol. Diamante
 *                        district:
 *                         example: Unidad y Progreso
 *                        numExt:
 *                         example: 1
 *                        numInt:
 *                         example: 1
 *                        city:
 *                         example: Xalapa
 *                        country:
 *                         example: Veracruz
 *                        cc:
 *                         example: 91020
 *                        UserId:
 *                         example: 1
 *                  404:
 *                      describe: Error 
 */
router.get('/address', verifyToken, getAllById)

// router.get('/users', getById)


export default router

