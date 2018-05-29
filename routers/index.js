import express from 'express';
import {testApi} from '../controllers';
//Added from s1-002
import {login} from '../controllers/auth';


const router = express.Router();

router.get('/test', testApi);
//Added from s1-002
router.post('/login',  login);

export default login
export default router
