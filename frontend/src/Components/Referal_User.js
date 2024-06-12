import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from './Layout';
const Referal_User = () => {
    const params=useParams();
    const [user,setuser]=useState({});
    const userDetails=async()=>{
        try{
        const {data}= await axios.get(`/api/v1/auth/singleUser/${params.id}`)
        if(data.success){
            setuser(data?.user)
        }
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        userDetails();
    }, []);
    
    
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card w-75 p-3">
              <h3> User Name : {user?.name}</h3>
              <h3> User Email : {user?.email}</h3>
              <h3> User points :{user?.points} </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 

export default Referal_User;