import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 

  const handleLogout = () =>{

    localStorage.removeItem("loggedIn")
    navigate('/login')

  }
  return (
 <div className='min-h-screen flex flex-col justify-between'>
    <div className='bg-yellow-300 p-4 sm:p-6 text-center sm:text-left'>
        Welcome {loggedInUser ? loggedInUser.name : 'Guest'} 
      </div>

    <div className=' flex justify-end mt-4 p-3 '>
      <button className='border-none bg-green-500 text-white rounded-md px-4 py-2 sm:px-6 sm:py-2 hover:bg-green-600 transition' onClick={handleLogout}>Logout</button>
    </div>
 </div>
  )
}

export default Home
