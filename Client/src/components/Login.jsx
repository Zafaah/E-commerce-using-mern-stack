import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios'
import Home from "../pages/Home";

import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
   const [userName, setUserName] = useState(" ");
   const [password, setPassword] = useState(" ");

   const Navigate = useNavigate()

   const chekPassword = (e) => {

      setPassword(e.target.value)


   }

   const handleSubmitt = async (e) => {
      e.preventDefault();
      if (userName == '' && password == "") {
         alert("pls enter userName and password")
      } else {
         await axios.post('http://localhost:9000/Users/Login', {
            userName: userName,
            password: password
         }).then((res) => {
            console.log(res.data)
            alert("successfully Login");
            Navigate('/')
         })
      }






   };

   return (
      <><div>

      </div>
         <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
            <div className="container py-5 h-100 ">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                        <div className="card-body p-5 text-center">
                           <h3 className="mb-5">Sign in</h3>

                           <form onSubmit={handleSubmitt}>
                              <div className="form-group mb-4">

                                 <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                              </div>
                              <div className="form-group mb-4">

                                 <input type="password" className="form-control" onChange={chekPassword} id="exampleInputPassword1" placeholder="Password" />
                              </div>


                              {/* Checkbox */}
                              <div className="form-check d-flex justify-content-start mb-4">
                                 <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                                 <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                              </div>
                              <button className="btn btn-primary btn-lg btn-block" type="submit"  >Login</button>
                              <hr className="my-4" />

                              <p className="text-center text-muted mt-5 mb-0">I don't have account

                                 <Link to="/Register" className="fw-bold text-body"><u>Sign_Up</u></Link></p>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section >


      </>
   )
}

export default LoginForm


