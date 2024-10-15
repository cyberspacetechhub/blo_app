import React, { useState, useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import useAuth from '../../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../../api/axios'
import useUpdate from '../../../hooks/useUpdate'

const UpdateBlog = () => {
  const { id } = useParams()
  const { data: blog, loading, error } = useFetch(`http://localhost:3600/blog/${id}`)
  const navigate = useNavigate()
  const [updating, setUpdating] = useState(false)
  const [updateError, setUpdateError] = useState(null)
  const { auth } = useAuth()
  const update = useUpdate()
  const { 
    register, 
    handleSubmit,
    setValue, 
    formState: { errors }, reset 
  } = useForm()
  console.log(auth.token)
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title,
        content: blog.content
      })
    }
  }, [blog, reset])

  const onSubmit = async (data) => {
    setUpdating(true)
    setUpdateError(null)

    const blog = {...data, _id : id, author: auth.user._id}
    console.log(blog)
  
  try{
    const res = await update(`blog_mng/${id}`,blog, auth.token)
    console.log(res)
    setTimeout (() => {
      navigate('/admin_dashboard/blogs')
    }, 2000)
  } catch (error) {
    setUpdateError(error.response?.data?.error || error.message)
  } finally {
    setUpdating(false)
  }

  //  try {
  //  try {
     
  //    const res =  await axios.put(`blog_mng/${id}`, blog, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     console.log(res)
  //     navigate(`/blog/${id}`)
  //   } catch (error) {
  //     setUpdateError(error.response?.data?.error || error.message)
  //   } finally {
  //     setUpdating(false)
  //   }
  }

  return (
    <div className='m-auto w-1/2 border'>
      <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 w-full border flex justify-center items-center flex-col gap-8'>
        <div className='flex flex-col gap-4 w-full'>
          <label htmlFor="title">Title</label>
          <input 
            className='border-2 border-black rounded-md p-2 w-full'
            type="text"
            id="title"
            {...register('title', { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <label htmlFor="content">Content</label>
          <textarea 
            className='h-44 w-full border-2 border-black rounded-md p-2'
            id="content"
            {...register('content', { required: true })}
          />
          {errors.content && <span>This field is required</span>}
        </div>
        <button type="submit" disabled={updating} className='bg-blue-600 p-3 w-full rounded-lg'>
          {updating ? 'Updating...' : 'Update Blog'}
        </button>
        {updateError && <p>{updateError}</p>}
      </form>
    </div>
  )
}

export default UpdateBlog
