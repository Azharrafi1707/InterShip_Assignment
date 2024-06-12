import User from "../Models/User.js";
import CheckEmail from "../Models/CheckEmail.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "./Password_help.js";
const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export const registerController=async(req,res)=>{
try{
    const {name, email,password,referal_code,answer} = req.body;
    const hashed_password=await hashPassword(password);

    const newUser=await new User({
        name,
        email,
        hashed_password,
        answer,
        referal_code:generateReferralCode()
    }).save();
    if(referal_code){
       const check_referal=await User.findOne({referal_code});
     if(check_referal){
        const check_email=await CheckEmail.findOne({email});
        if(check_email){
            console.log("in");
            {
                check_referal.refered_user.map((p)=>{
                    if(p.email===email){
                        p.id=newUser._id;
                        p.name=newUser.name;
                    }
                })
            }
            await check_referal.save();
            return res.status(201).send({
                success:true,
                refered:false,
                newUser,
                message:"Used Email,Referral can't be Avail"
            })
        }
        else{
            // console.log("In");
            check_referal.points += 100;
            const obj={
                id:newUser._id,
                name:newUser.name,
                email:newUser.email
            }
            check_referal.refered_user.push(obj);
            await check_referal.save();
            if(!check_email){
             await new CheckEmail({
                email
             }).save();
            }
        }
     }
     else{
        return res.status(201).send({
            success:true,
            refered:false,
            newUser,
            message:"Wrong Referral Code"
        });
     }
    }
    return res.status(201).send({
        success:true,
        refered:true,
        newUser,
        message:"Register through Referral Code"
    });
}
catch(err){
    console.log(err);
    res.status(400).send({
        success:false,
        error:err
    })
 }
}