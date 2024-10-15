import React, { useState } from 'react'
import usePost from '../hooks/usePost'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const post = usePost()

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm()
  
  const creatStudent = async (data) => {
    try {
      const res = await post(`reader`, data)
      console.log(res.data)
      setTimeout (() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=' m-auto w-10/12 border  border-gray-400 mt-20 rounded-lg'>
      <h1 className=' text-center font-bold text-2xl p-5'>Sign Up</h1>
      <p className=' text-center font-medium text-xl pb-5'>Fill in the from below</p>
      <form onSubmit={handleSubmit(creatStudent)} className=' m-auto w-96 flex justify-center flex-col items-center gap- my-5 py-5 border border-gray-300 rounded-lg px-10'>
        <div>
          <input 
          type="text" 
          {...register("fullname", {required : true})}
          placeholder='Fullname' 
          className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700'
          />
          {errors.fullname && (
              <p className="text-sm text-red-500">
                {" "}
                fullname is required{" "}
              </p>
            )}
        </div>
        <div>
          <input 
          type="text" 
          {...register("username", {required : true})}
          placeholder='Username' 
          className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700'
          />
          {errors.username && (
              <p className="text-sm text-red-500">
                {" "}
                username is required{" "}
              </p>
            )}
        </div>
        <div>
          <input 
          type="email" 
          {...register("email", {required : true})} 
          placeholder='Email' className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' 
          />
          {errors.email && (
              <p className="text-sm text-red-500">
                {" "}
                email is required{" "}
              </p>
            )}
        </div>
        <div>
          <input 
          type="phone" 
          {...register("phone", {required : true})} 
          placeholder='Phone' className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' 
          />
        </div>
        <div>
          <input 
          type="address" 
          {...register("address", {required : true})} 
          placeholder='Address' className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' 
          />
        </div>
        <div>
          <input 
          type="country" 
          {...register("country", {required : true})} 
          placeholder='Country' className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' 
          />
        </div>
        <div>
          <input 
          type="password" 
          {...register("password", {required : true})}
          placeholder='Password' 
          className=' w-full p-2 mb-5 border rounded-lg border-gray-300 outline-green-700' 
          />
          {errors.password && (
              <p className="text-sm text-red-500">
                {" "}
                password is required{" "}
              </p>
            )}
        </div>
        <p className=' text-red-600'>{error}</p>
        <div className=' inline-flex gap-2 items-center text-sm w-full mb-5'>
          <input type="checkbox" />
         <p>
          By signing up you have agreed to our <Link className='text-blue-600 text-sm'>terms and conditions and privacy policy</Link>
         </p>
        </div>
        <p className=' mb-5 text-center'>
          Already have an account? <Link to='/login' className=' text-blue-600 cursor-pointer font-medium'>Login</Link>
        </p>
        <input type="submit" value="Sign Up" className=' w-full bg-green-600 text-white p-2 rounded-lg cursor-pointer' />
      </form>
    </div>
  )
}

export default SignUp
