import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import "./login.css"


const Login = () => {
    // const Navigate = useNavigate();
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const json = await response.json();
      
          if (!response.ok) {
            alert(json);
            console.log(json);
            alert("Login failed")
            // setIsLoading(false);
            // setError(json.error);
          }
          if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            alert("Login successfully");
           
      

          }
    }
  return (
    <div>
        <div class="banner">
            <div class="loginbox">
                {/* <img src={User} alt=""/> */}
                <h1 ><i>Registration</i></h1>
                <form onSubmit={handlesubmit}>
                    <p>E-mail</p>
                    <input type="text" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
                    <p>Password</p>
                    <input type="password" name="password" value={password} id="myInput" onChange={(e)=>{setpassword(e.target.value)}} required/>
                    <a href="/allplans"><input type="submit" name="login" value="Login"/></a>
                </form>
                    <div>
                    <h5>Do not have an Account ?</h5>
                    <a href="/signup">Signup here</a>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Login
