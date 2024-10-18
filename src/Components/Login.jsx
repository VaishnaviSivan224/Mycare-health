import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errorMessage,setErrorMessage] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    if(input.email==='admin@gmail.com' && input.password ==='admin'){
      localStorage.setItem("loggedIn",'admin')//f;lg
      navigate('/admin')
    }else {
      const users = JSON.parse(localStorage.getItem("users")) || []

      const loggedUser = users.find((user)=> user.email === input.email && user.password === input.password)
      
    if(loggedUser ){
      localStorage.setItem("loggedInUser",JSON.stringify(loggedUser))
      localStorage.setItem("loggedIn", "user");//flag
   
      navigate('/')

    }else{
      setErrorMessage("Invalid Email or password")
    }

    }

  };
  return (
    <div className="flex items-center justify-center h-screen p-4">
      {" "}
     
      <div className="w-full sm:w-2/3 md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="font-medium text-2xl md:text-3xl">LOGIN</h1>
        </div>
        <form autoComplete="off" onSubmit={handleLogin}>
          <div className="text-left p-3">
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm md:text-base">Email</label>
              <input
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                 className="border p-2 w-full text-sm md:text-base"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-sm md:text-base">Password</label>
              <input
                name="password"
                value={input.password}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                 className="border p-2 w-full text-sm md:text-base"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full sm:w-auto border-none rounded-lg bg-green-500 px-6 py-2 text-white text-sm md:text-base"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-6">
  <p className="text-sm sm:text-base">Don't have an account?</p>
  <Link to='/register'>
    <u className="text-sm sm:text-base text-blue-600">Register</u>
  </Link>
</div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
