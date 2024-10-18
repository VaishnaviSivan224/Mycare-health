import React, { useState } from "react";
import health from '../assets/health.jpg';
import { useNavigate,Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:"",
  })





  const handleSubmit = (e) =>{
    e.preventDefault();

 
let users = JSON.parse(localStorage.getItem("users")) || []

const isUserExist = users.some((user)=>user.email === input.email)

if(isUserExist){

 alert("User already Exists ,Try another Email")



}else{
  users.push(input)
localStorage.setItem("users",JSON.stringify(users))

  alert("registration successful")
  navigate('/login')
}
  }
  return (
    <div className="relative w-full h-screen">
   
      <img className="absolute w-full h-full object-cover" src={health} alt="health" />

     
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-white bg-opacity-75 p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/3 lg:w-1/4">
        <div className="text-center">
          <h1 className="font-medium text-2xl sm:text-3xl">CREATE AN ACCOUNT</h1>
        </div>
     <form action="" autoComplete="off" onSubmit={handleSubmit}>     <div className="text-left p-3">
          <div className="" >
         <label htmlFor="name" className="block text-sm sm:text-base">Name</label>
            <input
              name="name"
              value={input.name}
              onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}

              className="border p-2 w-full text-sm sm:text-base"
              type="text"
              placeholder="Enter your Name"
            />
                          

          </div>
          <div className="mt-4">
          <label htmlFor="email"  className="block text-sm sm:text-base">Email</label>
            <input
              name="email"
              value={input.email}
              onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
               className="border p-2 w-full text-sm sm:text-base"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mt-4">
           <label htmlFor="password" className="block text-sm sm:text-base">Password</label>
            <input
            name="password"
            value={input.password}
         
            onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
                   className="border p-2 w-full text-sm sm:text-base"
              type="password"
              placeholder="Password"
            />



          </div>

          <div className="text-center mt-6">
            <button 
            type="submit"
            className="w-full sm:w-auto bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
              Register
            </button>
         
          </div>
          <div className="text-center mt-6">
  <p className="text-sm sm:text-base">Already have an account?</p>
  <Link to='/login'>
    <u className="text-sm sm:text-base text-blue-600">Login</u>
  </Link>
</div>
        
      
        </div></form>
   
      </div>
    </div>
  );
};

export default Register;
