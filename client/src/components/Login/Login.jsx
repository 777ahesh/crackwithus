import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Loginimg from "../../images/login.png"
import "./login.css"


const Login = () => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async(e) =>{
    e.preventDefault();

    const res = await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    });

   

    const data = await res.json();

    if(res.status === 404 || !data || res.status === 400 ){
      window.alert("invalid Cred")
    }else{
      window.alert(`"Login Successfull..."${email}`);
      console.log(data);
      history.push("/code");
    }
  } 

  return (
      <>
     <Navbar/> 
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src={Loginimg} className="img-fluid animated"
            alt="Sample"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form className="mx-1 mx-md-4" method="POST">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
  
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
  
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" name="email" id="form3Example3" className="form-control form-control-lg"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter a valid email address" />
              <label className="form-label" for="form3Example3">Email address</label>
            </div>
  
            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <input type="password" name="password" id="form3Example4" className="form-control form-control-lg"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter password" />
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Checkbox --> */}
              
              {/* <a href="#!" className="text-body">Forgot password?</a> */}
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
                <input type="submit" name="signin" className="btn btn-primary btn-lg"
                  value="Log In"
                  onClick={loginUser}
                />
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/signup"
                  className="link-danger">Register</NavLink></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    
  </section>
  </>
  )
}

export default Login