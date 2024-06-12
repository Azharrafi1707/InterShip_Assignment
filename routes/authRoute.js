import express from "express";
const router=express.Router();
import {registerController} from "../Controller/registerController.js"
import { loginController } from "../Controller/loginController.js";
import { requireSignIn } from "../Controller/requireSignIn.js";
import {deleteUser} from "../Controller/deleteUser.js";
import { getSingleUser } from "../Controller/getSingleUser.js";

//register route
router.post("/register", registerController);
router.post("/login",loginController); 

//protected route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//get single User
router.get("/singleUser/:id",requireSignIn,getSingleUser)
router.delete("/delete-user/:user",requireSignIn,deleteUser) 

export default router;