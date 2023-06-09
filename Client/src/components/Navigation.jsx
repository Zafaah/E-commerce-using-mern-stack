import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
   return (
      <>
         <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
               <div className="container">
                  <Link className="navbar-brand" to="/"><img id="MDB-logo" src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo" draggable="false" height={30} /></Link>
                  <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <i className="fas fa-bars" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                           <Link className="nav-link mx-2" to="/"><i className="fas fa-plus-circle pe-2" />Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link mx-2" to="/Shope"><i className="fas fa-bell pe-2" />Shop</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link mx-2" to="/profile"><i className="fas fa-heart pe-2" />Profile</Link>
                        </li>
                        <li className="nav-item ms-3">
                           <Link className="btn btn-black btn-rounded" to="/Carts">Cart</Link>
                        </li>
                        <li className="nav-item ms-3">
                           <Link className="btn btn-black btn-rounded" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item ms-3">
                           <Link className="btn btn-black btn-rounded" to="/Register">Register</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
         <div className="container">
            <Outlet />
         </div>
      </>
   )
}

export default Navigation;