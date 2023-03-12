import { signOut } from 'firebase/auth';
import React from 'react'
import { BiPlus } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';



const Sidebar = () => {

  const navigate = useNavigate()

  const Logout = async ()=>{
    try {
      await signOut(auth)
      console.log('sucessful')
      console.log(auth.currentUser)
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='bg-[#171f3c] gap-5 justify-between items-center flex flex-col py-5 mt-2 rounded-md w-[250px]'>
      <button
       className='p-2 flex justify-center items-center px-8 rounded-md bg-indigo-600'
       > <BiPlus className='text-[1.4rem] mr-2'/> New Chat</button>
      
      <button
       onClick={Logout}
       className='p-2 px-8 rounded-md border'
       >Log Out</button>
    </div>
  )
}

export default Sidebar