import express from 'express';
import { requestOtp , verifyOtp} from '../controller/authController';
import validateInput from '../lib/modules/validateInput';
import { loginInput, signupInput } from '../lib/types/zodtypes';
const router = express.Router();


// router.post('/signup',validateInput(signupInput), signup);
// router.post('/login',validateInput(loginInput), login);
router.post('/request-otp',requestOtp);
router.post('/verify-otp',verifyOtp)
export default router;