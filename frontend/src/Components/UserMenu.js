import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import  Axios from "axios";
const UserMenu = () => {
  const [auth,setAuth]=useContext(AuthContext);
  const navigate=useNavigate();
  const DeleteHandler=async()=>{
     try{
      const {data}=await Axios.delete(`/api/v1/product/delete-Userproduct/${auth?.user?.email}`);
      if(data?.success){
        setAuth({
          user: null,
          token: ""
        })
        localStorage.removeItem("auth")
        navigate("/register")
      }
      const res=await Axios.delete(`/api/v1/auth/delete-user/${auth?.user?.email}`);
      if(res?.data.success){
        setAuth({
          user: null,
          token: ""
        })
        localStorage.removeItem("auth")
        navigate("/register")
      }
     }
     catch(err){ 
      console.log(err);
     }
  }
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>User Panel</h4>
          <NavLink
            to="/dashboard/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/refered_users"
            className="list-group-item list-group-item-action"
          >
            Refered User
          </NavLink>
          
          <button
          onClick={DeleteHandler}
            className="list-group-item list-group-item-action"
          >
          Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default UserMenu;