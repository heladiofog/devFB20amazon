import express from 'express';
import { testApi } from '../controllers';

//Added from s1-002
import { authlogin } from '../controllers/auth';
import { createUser, patchUser, getById, deleteUser } from '../controllers/controllerUsers';
import { verifyToken } from '../middlewares/midelware'

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

// router.get('/users', getById)


export default router;