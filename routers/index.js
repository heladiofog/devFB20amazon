import express from 'express';
import {testApi} from '../controllers';
import {createUser} from '../controllers/controllerUsers';

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
router.get('/test', testApi);

router.post('/users', createUser);

// router.get('/userById', getById)

export default router