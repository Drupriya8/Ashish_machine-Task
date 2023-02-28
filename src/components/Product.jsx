import React from "react";


function Product({ product }) {

  const { title, price, image } = product;

  return (
    <div className="col-12 col-md-6 col-lg-4  d-flex  justify-content-center my-5 ">
      <div className="card item d-flex  justify-content-center main-card" style={{ width: "18rem" }}>
        <img  
        src={image} className="card-img-top img ms-5 mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price :- {price}$</h5>
          <p className="card-text">{title}</p>
          <button className="btn btn-warning " >
           Add To Cart
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
