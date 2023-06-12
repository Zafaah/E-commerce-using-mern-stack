import React, { useEffect, useState } from 'react'
import './reg.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
   const [userName, setUserName] = useState('');
   const [Email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirm, setConfirm] = useState('');
   const [Roll, setRoll] = useState('')
   // const handleChange = (selectedOption) => {
   //    console.log(selectedOption);
   //    setRoll(selectedOption.value);
   // };
   const confirmPass = (e) => {

      setConfirm(e.target.value)
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (confirm == password) {
         await axios.post('http://localhost:9000/Users/register', {
            userName: userName,
            Email: Email,
            password: password,
            Roll: Roll,
         }).then((res) => {
            console.log(res.data);
            alert('successful')
         })
      } else
         alert('not same')

   }

   return (
      <>
         <div >
            <section className="vh-100 bg-image align-items-center" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
               <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                  <div className="container h-100">
                     <div className="row d-flex justify-content-center w-90 p-4 px-5 align-items-center h-90">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                           <div className="card" style={{ borderRadius: 15 }}>
                              <div className="card-body p-5 ">
                                 <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                 <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-4">
                                       <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter userName' id="form3Example1cg" className="form-control form-control-lg" />

                                    </div>
                                    <div className="form-outline mb-4">
                                       <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' id="form3Example3cg" className="form-control form-control-lg" />

                                    </div>
                                    <div className="form-outline mb-4">
                                       <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' id="form3Example4cg" className="form-control form-control-lg" />

                                    </div>
                                    <div className="form-outline mb-4">
                                       <input type="password" onChange={confirmPass} placeholder='Re-enter password' id="form3Example4cdg" className="form-control form-control-lg" />

                                    </div>
                                    <div className='mb-4'>

                                       <input type="text" onChange={(e) => { setRoll(e.target.value) }} placeholder='Roll' id="form3Example4cdg" className="form-control form-control-lg" />
                                       {/* <select onSelect={handleChange} className="form-select" aria-label="Default select example">
                                          <option defaultValue="Roll">Roll</option>
                                          <option value="admin">Admin</option>
                                          <option value="user">User</option>
                                       </select> */}

                                    </div>
                                    <div className="d-flex justify-content-center">
                                       <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>
                                    <p className="text-center text-muted mt-5 mb-0">Have already an account?
                                       <Link to="/" className="fw-bold text-body"><u>Login here</u></Link></p>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   )
}

export default RegisterForm