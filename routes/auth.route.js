import Express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {body}from "express-validator";
import { validatorResultExpress } from "../middlewares/validatorResultExpress.js";
const router = Express.Router();
router.post(
    "/register",
[
    body("email","formato email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
    
    body("password","minimo 6 caracteres").trim().isLength({min:6}),
    body("password","formato de password incorrecta") .custom (
       (value, { req }) =>  {
     if(value !== req.body.repassword){
       throw new Error("No coinciden las contraseñas");
     }
        return value;
    }
 ),
],
validatorResultExpress,
register
);
router.post(
    "/login", 
[
    body("email","formato email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password","minimo 6 caracteres").trim().isLength({min:6}),
],
validatorResultExpress,
login 
);

export default router;