import React, { useState } from "react";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [email,setemail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const handleRegister = async (e)=>{
      e.preventDefault();
      try {
        if(email || password){
          await createUserWithEmailAndPassword(auth,email,password)
          navigate('/app/chat')
        }else{
          console.log('fill form')
        }
      } catch (error) { 

      }

    }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" bg-gray-800 rounded-md w-1/4">
        <form action="" className="p-8">
            <h1 className="mb-5 text-center text-lg">Create New Account</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input 
                  value={email}
                  onChange={(e)=>setemail(e.target.value,e.preventDefault())}
                  type="text" 
                  className="p-2 rounded-md outline-none bg-slate-600 " />
            </div>
            <div className="flex flex-col  mt-5 gap-2">
                <label htmlFor="">password</label>
                <input 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value,e.preventDefault())}
                  type='password' 
                  className="p-2 rounded-md outline-none bg-slate-600 " />
            </div>
            <button 
              onClick={handleRegister}
              className="w-full p-2 rounded-md bg-indigo-600 mt-5">Log in</button>

              <p className="text-center mt-9">already a user? <button className="text-indigo-500" onClick={()=>navigate('/login')}>Login</button></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
