import React, { useState } from 'react'
import usePost from '../../../hooks/usePost'
import useAuth from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useAuth()
  const navigate = useNavigate()
  const post = usePost()

  const handleNewUser = async(e) => {
    e.preventDefault()

    if (!auth || !auth.token) {
      navigate('/login')
      return
    }
    const formData = {
      fullname: fullname,
      email: email,
      password: password
    }
    try{
      const res = await post('admin', formData, auth.token)
      console.log(res.data);
      navigate('/admin_dashboard/users')
      console.log(formData);

    } catch (err) {
      console.log(err);
    }
  }
  console.log(auth);
  return (
    <div>
      <div className=' m-auto w-96'>
        <h1 className=' text-2xl font-bold text-gray-600 mt-5'>Create User</h1>
        <form className=' flex flex-col gap-3 pt-10' onSubmit={(e) => handleNewUser(e)} method='post'>
          <input className=' border border-gray-500 text-gray-700 font-medium focus:outline-gray-300 rounded-md px-2 py-2' onChange={(e) => setFullname(e.target.value)} type="text" name="fullname" id="fullname" placeholder='fullname' />
          <input className=' border border-gray-500 text-gray-700 font-medium focus:outline-gray-300 rounded-md px-2 py-2' onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='email' />
          <input className=' border border-gray-500 text-gray-700 font-medium focus:outline-gray-300 rounded-md px-2 py-2' onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='password' />
          <button className=' bg-green-500 py-2 font-semibold text-gray-100 rounded-md' type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateUser
