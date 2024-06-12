import React from 'react'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'
import UserMenu from "./UserMenu.js"
import Layout from './Layout.jsx'
import { Link } from 'react-router-dom'
const ReferedUser = () => {
    const [auth]=useContext(AuthContext);
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3 className='text-center refered-user-container'>Refered by {auth?.user?.name}</h3>
              <h3> User points : {auth?.user?.points}</h3>
              <h3> Referal code : {auth?.user?.referal_code}</h3>
              <h3> Refered User : {
                auth?.user?.refered_user.map((p)=>(
                  <div key={p._id} className="refered-user-item">
                    <Link to={`/dashboard/${p.id}`} className="refered-user-link">
                        {p.name}
                  </Link>
                  </div>
                ))
              }</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReferedUser