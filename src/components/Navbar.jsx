import React from 'react'
import { Link } from 'react-router-dom/dist'

function Navbar() {
    
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary home-bg">
        <div className="container-fluid">
            <Link className="navbar-brand fs-2 fw-bold" to="/">My.<span className="text-warning fs-1">S</span>tore</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {/* style="margin-left:10% ;" */}
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-semibold">
                    <li className="nav-item">
                        <Link to="/electronic" className="nav-link active" aria-current="page" >Electronics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/jewlery">Jewelery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/men"> Men's Clothing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/women">Women's Clothing</Link>
                    </li>
                </ul>
              <Link to={"/cart"}>  <button type="button" className="btn btn-warning position-relative me-3 fs-5">
                    Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+11<span className="visually-hidden">unread messages</span></span>
                  </button></Link>
            </div>
            
           
        </div>
    </nav>
  
  )


}


export default Navbar