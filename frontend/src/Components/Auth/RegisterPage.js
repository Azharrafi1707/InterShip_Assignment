import React,{useState} from 'react'
import Layout from "../Layout.jsx"
import Axios from "axios"
import "../../index.css"
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name,setName]=useState("");
    const [email,setemail]=useState("");
    const [password,setPassword]=useState("");
    const [referal_code,setreferal]=useState("");
    const [answer,setAnswer]=useState("");
    const Navigate=useNavigate();
    const submitHandler=async (e)=>{
        e.preventDefault();
        try{
            const res=await Axios.post("/api/v1/auth/register",
            {name,email,password,referal_code,answer})
            if(res && res.data.success){
                if(res.data.refered){
                    alert("Registered through Referral code")
                }
                else{
                    alert(`${res?.data?.message}`)
                }
                Navigate("/login");
                // console.log("shi chal raha");
            }
        }
        catch(err){
            console.log(err);
            // console.log("nhi chal raha");
        }
    }
    return (
        <Layout title="Ecommerce-register">
            <div className="form-container">
                <h4 className="title">Register page</h4>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <input type="text" 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        className="form-control" 
                        id="exampleInputName" 
                        placeholder='Enter Your Name'
                        required 
                        />
                    </div>
                    <div className="mb-3">
                        <input type="email" 
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder='Enter Your Email'
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <input type="password" 
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder='Enter Your Password'
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" 
                        value={answer} 
                        onChange={(e) => {
                            setAnswer(e.target.value)
                        }}
                        className="form-control" 
                        id="exampleInputName" 
                        placeholder='What is your favourite movie?'
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" 
                        value={referal_code}
                        onChange={(e) => {
                            setreferal(e.target.value)
                        }}
                        className="form-control" 
                        id="exampleInputName" 
                        placeholder='Referal Code(Optional)'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </Layout>
    )
}
export default Register