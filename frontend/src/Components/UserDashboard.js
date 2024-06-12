import React, { useContext } from "react";
import UserMenu from "./UserMenu.js"
import Layout from "./Layout.jsx";
import {AuthContext } from "../context/auth.js";
const AdminDashboard = () => {
  const [auth] = useContext(AuthContext);
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> User Name : {auth?.user?.name}</h3>
              <h3> User Email : {auth?.user?.email}</h3>
              <h3> User points : {auth?.user?.points}</h3>
              <h3> Referal code : {auth?.user?.referal_code}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;