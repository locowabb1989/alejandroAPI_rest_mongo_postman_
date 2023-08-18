import { User } from "../models/User.js";
import  jwt  from "jsonwebtoken";

export const register= async(req, res)=>{
    const {email,password}= req.body;
    try {
        const user = new User({email, password});
        await user.save()
        //JWT DEL REGISTRO
        return res.json({ok:true})
    } catch (error) {
       console.log(error.code);
       if(error.code===11000){
        return res.status(400).json({error:"YA EXISTE ESTE USUARIO"});
       }
       return res.status(500).json({error:"ERROR DE SERVIDOR"});
    }
    res.json({ok:"register"});
};


export const login= async(req, res)=>{
    try {
        const {email, password }=req.body;
        let user= await User.findOne({email});
        if(!user) return res.status(403).json({error:"NO EXISTE ESTE USUARIO"});

            const respuestapassword= await user.comparePassword(password);
            if(!respuestapassword)
            return res.status(403).json({error:"CONTRASEÑA INCORRECTA"});
        //generacion de token
         const token=jwt.sign({uid: user.idC}, process.env.JWT_SECRET)

        return res.json({token});
    } catch (error) {
        console.log(error)
     return res.status(500).json({error:"ERROR DE SERVIDOR"});
    }
   
};
   