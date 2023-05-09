import express from "express";
import {registerController, loginController, userController, refreshController, quizController} from "../controllers";
import auth from "../middlewares/auth";
const router = express.Router();

router.post('/register',registerController.register);
router.post('/login',loginController.login);
router.get('/me',auth,userController.me);
router.post('/refresh',refreshController.refresh);
router.post('/store',quizController.store);
router.get('/show',quizController.showAll);

export default router;  