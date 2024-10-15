
import React, { useState } from 'react'
import usePost from '../hooks/usePost'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
  const [ email, setEmail] = useState(null)
    const [ password, setPassword] = useState(null)
    const [ error, setError] = useState(null)
    const [ loading, setLoading] = useState(false)
    const post = usePost()
    const {auth, setAuth } = useAuth()
    const navigate = useNavigate()
    const handleLogin = async(e)=>{
        e.preventDefault()
        const mydata = {
            email: email,
            password: password
        }
        const res = await post(`auth`, mydata)
       
        console.log(res.data);
        setAuth({
            user: res.data.user,
            token: res.data.accessToken
        })

        setTimeout(() => {
          if(res.data.user.role === "admin"){
            navigate("/admin")
          }else{
            navigate("/user_dashboard")
          }
      }, 2000);

    }

    console.log(auth);;
  return (
    <div>
      <h1 className=' text-center font-bold my-5'>Sign In</h1>
      <p className=' text-center font-medium text-xl pb-5'>Enter your details to sign in</p>
      <form onSubmit={handleLogin} className=' m-auto w-96 flex justify-center flex-col items-center gap- my-5 py-5 border border-gray-300 rounded-lg px-10'>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' />
        <p className=' text-red-600'>{error}</p>
        <div className=' inline-flex gap-2 items-center text-sm w-full mb-5'>
          <input type="checkbox" />
         <p>
          Remember me
         </p>
        </div>
        <p className=' mb-5 text-center'>
          Don't have an account? <Link to='/signup' className=' text-blue-600 cursor-pointer font-medium'>Sign Up</Link>
        </p>
        <input type="submit" value="Sign In" className=' w-full bg-green-600 text-white p-2 rounded-lg cursor-pointer' />
      </form>
    </div>
  )
}

export default SignIn
