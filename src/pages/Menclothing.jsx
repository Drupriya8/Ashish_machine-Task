import React from "react";
import { useEffect } from "react";
import { getproducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { motion } from "framer-motion";

function Menclothing() {
  const { products, isLoading, isError } = useSelector(
    (state) => state.product
  );
  const Eproducts = products.filter(
    (item) => item.category === "men's clothing"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <h1 className="error">Somthing went Wrong</h1>;
  }

  return (
    <motion.div  initial={{ x: "-250" }}
    animate={{ x: 0 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 120 }} className="container text-center bg_page">
      <div className="row ">
        <motion.h1  animate={{ fontSize:50,color:'black'}}
    transition={{ delay: 0.7, }} className="all-products-title">Men's Clothing</motion.h1>
        {Eproducts.map((Eproduct) => (
          <Product key={Eproduct.id} product={Eproduct} />
        ))}
      </div>
    </motion.div>
  );
}

export default Menclothing;
