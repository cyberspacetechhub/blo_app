import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
  const {id} = useParams()
  console.log(id)
  const blogUrl = `http://localhost:3600/blog/${id}`
  const otherBlogsUrl = 'http://localhost:3600/blog'
  const {data, isLoading, error} = useFetch(blogUrl)
  const [otherBlogs, setOtherBlogs] = useState([])
  const {data:otherData, isLoading:otherIsLoading, error:otherError} = useFetch(otherBlogsUrl)
  console.log(otherData)
  
  useEffect (() => {
    if (otherData) {
      const filteredBlogs = otherData.filter(blog => blog._id !== id)
      setOtherBlogs(filteredBlogs)
    }
  }, [otherData, id])
  console.log(data);
  
  if (data) {
    console.log(data)
  }
  return (
    <div className=' m-auto'>
     {
      data && (
        <div className=' pt-10 px-5'>
        <h2 className=' font-bold text-3xl text-center pb-10'>{data.title}</h2>
        <img className=' w-full border' src={data.image} alt={data.title} />
        <p className=' text-center'>{data.date}</p>
        <p className=' text-center'>{data.author.username}</p>
        <p>{data.content}</p>
     </div>
     )
     }
     {
      otherBlogs && (
        <div className=' flex flex-wrap gap-4 justify-center mt-20'>
          {
            otherBlogs.map((blog) => (
              <div className=' w-1/4 border p-3 h-auto' key={blog._id}>
                <img className=' w-full border' src={blog.image} alt={blog.title} />
                <h2 className=' text-2xl font-bold h-full'>{blog.title}</h2>
                {/* <p>{blog.date}</p>
                <p>{blog.author}</p>
                <p>{blog.content}</p> */}
              </div>
            ))
          }
        </div>
      )
     }
    </div>
  )
}

export default BlogDetails
