import React from 'react'
import useFetch from "../hooks/useFetch";
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Blogs = () => {
  const url = `http://localhost:3600/blog/`;
  const {auth} = useAuth()

  console.log(auth.token)
  // Call the useFetch hook
  const { data, isLoading, error } = useFetch(url );

  if (data){
    console.log(data[0])
  }

  // Ensure data is available before attempting to render it
  if (!data) return <p>No data available</p>;
  if (data) console.log(data)
  return (
    <div className=' my-10 flex justify-center max-lg:flex-wrap max-sm:flex-wrap gap-4 bg-white z-40'>
      <div className='nav-wrapper w-1/5 max-lg:w-2/5 max-sm:w-full border-r px-2  h-screen overflow-auto pb-10'>
        <h1 className=' text-3xl font-bold text-green-700 uppercase'>latest news</h1>
        <p className=' text-gray-500'>Read our latest blogs</p>
        <hr className=' my-5' />
        <div>
            {isLoading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error: {error.message}</h1>
          ) : (
            data.map((blog) => (
              <div key={blog._id} className=' w-full shadow-sm hover:shadow-md rounded-md px-5 py-2 mt-4 max-lg:flex max-lg:gap-4'>
                <img src={`http://localhost:3600/${blog.image}`} alt={blog.title} className=' rounded-lg w-full h-36 max-lg:w-32' />
                <h2 className=' text-start font-bold text-lg text-gray-700'>{blog.title}</h2>
              </div>
            )
          )
          )}
        </div>
      </div>
    <div className='nav-wrapper w-1/2 max-sm:w-full h-screen overflow-auto flex flex-col gap-8 pb-10'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error.message}</h1>
      ) : (
        data.map((blog) => (
          <div key={blog._id} className=' w-full shadow-sm hover:shadow-md rounded-md px-5'>
            <img src={`http://localhost:3600/${blog.image}`} alt={blog.title} className=' rounded-lg w-full h-64 ' />
            <h2 className=' text-start font-bold text-3xl text-gray-700'>{blog.title}</h2>
            <h2 className=' text-start font-semibold text-xl text-gray-500'>{blog.subTitle}</h2>
            <p className=' text-start font-normal text-gray-400'>Author: {blog.author.username}</p>
            <p>{blog.date}</p>
            <p>{blog.content.substring(0, 100)}...</p>
            <Link to={`/blog_details/${blog._id}`}>Read More</Link>
          </div>
        )
      )
      )}
    </div>
      <div className='nav-wrapper w-1/4 border-l px-5 flex flex-col gap-8 h-screen overflow-auto pb-10 bg-white max-lg:w-full'>
        <div>
        <div className=' bg-white max-lg:mt-40 z-40 w-full'>
          <h1 className=' text-2xl uppercase text-red-600 font-bold'>Other News</h1>
          <hr className=' my-5' />
        </div>
        <div className=' mt-20 z-10'>
            {isLoading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error: {error.message}</h1>
          ) : (
            data.map((blog) => (
              <div key={blog._id} className=' w-full shadow-sm hover:shadow-md rounded-md px-5 py-2 mt-4'>
                <img src={`http://localhost:3600/${blog.image}`} alt={blog.title} className=' rounded-lg w-full h-36 ' />
                <h2 className=' text-start font-bold text-lg text-gray-700'>{blog.title}</h2>
              </div>
            )
          )
          )}
        </div>
        </div>
      </div>
  </div>
  )
}

export default Blogs
