import React from "react";
import { useEffect } from "react";
import Product from "./Product";
import { getproducts } from "../store/productSlice";
import {  useDispatch, useSelector } from "react-redux";


function ProductContainer() {
 
const {products,isLoading,isError}=useSelector(state=>state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getproducts())
  },[dispatch]);
        
  
  if(isLoading){
    return(
      <div className="loading"></div>
    )
  }
  if(isError){
    return(
      <h1 className="error">Somthing went Wrong</h1>
    )
  }

  return (
    <div className="container text-center">
    <div className="row ">
    <h1 className="all-products-title text-dark">All Products</h1>
      {
        products.map(product => <Product key={product.id} product={product} />)
      }
    </div>
    </div>

  );
}

export default ProductContainer;
