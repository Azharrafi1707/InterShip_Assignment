import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
const Products = () => { 
    const [products, setProducts] = useState([]);
    const [auth] = useContext(AuthContext);
    //getall products
    const email=auth?.user?.email;
    const getAllProducts = async () => { 
        try {
            const { data } = await axios.post("/api/v1/product/get-product",{email});
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteProduct=async (e)=>{
        try{
            const {data}=await axios.delete(`/api/v1/product/delete-product/${e.target.value}`);
            getAllProducts()
        }
        catch(err){
            console.log(err);
        }
    }

    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, [getAllProducts()]);
    return (
        <Layout>
            <div className="row">
                <div className="col-md-12 ">
                    <h1 className="text-center"> Products List created by {`${auth?.user?.name}`}</h1>
                    <div className="d-flex">
                        {products?.map((p) => (
                            <>

                                <div className="card m-2" style={{ width: "18rem" }}>
                                    <img
                                        src={`/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt={p.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.description}</p>
                                        
                                        <button className=" btn btn-danger btn-sm"
                                        onClick={deleteProduct}
                                        value={p._id}
                                        >
                                        Delete</button>
                                        
                                    </div>
                                    
                                </div>

                            </>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;