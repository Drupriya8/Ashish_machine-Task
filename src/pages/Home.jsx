import React from "react";
import ProductContainer from "../components/ProductContainer";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <div className=" mb-5 ">
        <svg
          className="wave "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a2d9ff"
            fillOpacity="1"
            d="M0,160L40,181.3C80,203,160,245,240,272C320,299,400,309,480,266.7C560,224,640,128,720,85.3C800,43,880,53,960,69.3C1040,85,1120,107,1200,112C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        <motion.div
          className="text-section text-center "
          initial={{ y: "-250" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <span className="">
            <h1 className="mb-4 " style={{ fontSize: 80 }}>
              <span className="text-warning">O</span>nline Shopping
            </h1>
            <h3>Shop Anything At Your Home Online</h3>
            <button type="button" className="btn btn-warning mt-4 mb-5">
              Shop Now
            </button>
          </span>
        </motion.div>
      </div>
      <ProductContainer />
    </>
  );
}

export default Home;
