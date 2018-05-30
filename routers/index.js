import express from 'express';
import {testApi} from '../controllers';
//Added from s1-002
import {authlogin} from '../controllers/auth';


const router = express.Router();

router.get('/test', testApi);
//Added from s1-002
router.post('/login',  authlogin);

export default router 
 
