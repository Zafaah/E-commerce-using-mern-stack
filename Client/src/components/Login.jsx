import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

const LoginForm = () => {
   const [UserName, setUserName] = useState(" ");
   const [password, setPassword] = useState(" ");

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(UserName, password);

      const data = await axios.post("/Users/Login", { userName: UserName, password: password })
      console.log(data)



   }

   // useEffect(() => {
   //    fetch("http://localhost:9000/Users/Login", {
   //       method: "post",
   //       crossDomain: true,
   //       headers: {
   //          "Content-Type": "application/json",
   //          Accept: "application/json",
   //          "Access-Control-Allow-Origin": "*",
   //       },
   //       body: JSON.stringify({
   //          UserName,
   //          password,
   //       }),
   //    })
   //       .then((res) => res.json())
   //       .then((data) => {
   //          console.log(data, "userRegister");
   //          if (data.status == "ok") {
   //             alert("login successful");

   //          }
   //       });

   //    // 
   // }, [])



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
                           <form onSubmit={handleSubmit}>
                              <div className="form-group mb-4">

                                 <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                              </div>
                              <div className="form-group mb-4">

                                 <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                              </div>


                              {/* Checkbox */}
                              <div className="form-check d-flex justify-content-start mb-4">
                                 <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                                 <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                              </div>
                              <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                              <hr className="my-4" />
                              <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="submit"><i className="fab fa-google me-2" /> Sign in with google</button>
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


