
import React, { useContext, useEffect, useState } from 'react'
import usePost from '../hooks/usePost'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import baseUrl from '../api/baseUrl'
import { useForm } from 'react-hook-form'
import AuthContext from '../contexts/AuthProvider'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {auth, setAuth, persist, setPersist} = useContext(AuthContext)
  const navigate = useNavigate()
  const url = `${baseUrl}auth`

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    // e.preventDefault();
    //console.log(e)
    // const formData = new FormData()
    // formData.append('email', email)
    // formData.append('password', password)
    try{
      const response = await axios.post('auth', data, {
        headers: {
          'Content-Type': 'application/json'
        },
        // withCredentials: true
      })
      console.log(response.data)
      setAuth({
        user:response.data?.user,
        token:response.data?.accessToken
      }
      )
      setTimeout(() => {
        if(response.data?.user?.type === 'Admin'){
          navigate('/admin_dashboard')
        }else{
          navigate('/user_dashboard')
        }
      }, 1000)
    }catch(err){
      console.log(err)
    }
  }
  const togglePersist = () => {
    setPersist((prev) => !prev);
  };
  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);
  return (
    <div className=' m-auto w-96'>
      <h1 className=' text-2xl font-bold text-gray-600 mt-5'>Login</h1>
      <form className=' flex flex-col gap-3 pt-10' onSubmit={handleSubmit(handleLogin)} method='get'>
        <div className=' flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input 
            className=' border border-gray-500 text-gray-700 font-medium focus:outline-gray-300 rounded-md px-2 py-2' 
            type="email"
            required = 'required'
            {...register("email", {required : true})}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {" "}
                email is required{" "}
              </p>
            )}
        </div>
        <div className=' flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input 
            className=' border border-gray-500 text-gray-700 font-medium focus:outline-gray-300 rounded-md px-2 py-2' 
            type="password" 
            required = 'required'	
            {...register("password", {required : true})} 
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {" "}
                password is required{" "}
              </p>
            )}
        </div>
        <div className="flex items-center  gap-2">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              onChange={togglePersist}
              checked={persist}
            />
          </div>
          <div className="text-sm">
            <Link className="font-medium text-indigo-600 hover:text-indigo-500">
              Remember me
            </Link>
          </div>
        </div>
        <input className=' bg-blue-600 p-3 w-full rounded-lg text-white font-semibold' type="submit" value='Login' />
      </form>
    </div>
  )
}

export default Login
