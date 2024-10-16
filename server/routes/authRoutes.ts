import express from 'express';
import { login, signup } from '../controller/authController';
import validateInput from '../lib/modules/validateInput';
import { loginInput, signupInput } from '../lib/types/zodtypes';
const router = express.Router();


router.post('/signup',validateInput(signupInput), signup);
router.post('/login',validateInput(loginInput), login);

export default router;