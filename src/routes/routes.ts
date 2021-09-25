import { Router } from 'express';

import authMiddleware from '../app/middlewares/authMiddleware';

import UserController from '../app/controllers/UserController';
import AuthController from '../app/controllers/AuthController';

const router = Router();

router.get('/', UserController.index);
router.get('/login', UserController.login);
router.post('/login', UserController.loginPost);
router.get('/cadastro', UserController.cadastro);
router.post('/cadastro', UserController.cadastroPost);


router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);




export default router;