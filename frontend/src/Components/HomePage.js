import React,{useContext} from 'react'
import { AuthContext } from '../context/auth'
import { json } from 'react-router-dom';
import Layout from './Layout';

const HomePage = () => {
    const [auth,setauth]=useContext(AuthContext);
  return (
    <>
      <Layout>{JSON.stringify(auth)}</Layout>
    </>
  )
}

export default HomePage