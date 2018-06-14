
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
router.get('/test', testApi);
router.post('/login',  authlogin);
router.post('/users', createUser);
router.patch('/users', verifyToken, patchUser)
router.delete('/users', deleteUser)

// router.get('/users', getById)


export default router