import express from 'express';
import {testApi} from '../controllers';
import {createUser} from '../controllers/controllerUsers'

const router = express.Router();

router.get('/test', testApi);

router.post('/users', createUser);

export default router