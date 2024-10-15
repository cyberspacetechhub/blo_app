import React from 'react'
import { Link } from 'react-router-dom'

const AdminDash = () => {
  return (
    <div className=' flex px-5 max-md:px-2 h-screen'>
      <aside className=' w-1/5 border-r pr-5 pt-5 h-auto max-md:hidden'>
        <div className=' flex flex-col gap-2 border-b border-gray-600 pb-10'>
          <Link className=' flex items-center gap-2 py-2 font-medium hover:bg-gray-100 px-2' to=''>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>
            </span>
            Dashboard
          </Link>
          <Link className=' flex items-center gap-2 py-2 font-medium hover:bg-gray-100 px-2' to='/admin_dashboard/blogs'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M19,19H5V5h10v4h4V19z M7,17h10v-2H7V17z M12,7H7 v2h5V7z M7,13h10v-2H7V13z"/></g></svg>
            </span>
            Blogs
          </Link>
          <Link className=' flex items-center gap-2 py-2 font-medium hover:bg-gray-100 px-2' to=''>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"/><polygon points="12,15 13.57,11.57 17,10 13.57,8.43 12,5 10.43,8.43 7,10 10.43,11.57"/></g></g></svg>
            </span>
            Reviews
          </Link>
        </div>
        <div className=' mt-10'>
          <Link className=' flex items-center gap-2 py-2 font-medium hover:bg-gray-100 px-2' to='/admin_dashboard/users'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"/><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"/><path d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"/><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"/></g></g></svg>
            </span>
            Users
          </Link>
          <Link className=' flex items-center gap-2 py-2 font-medium hover:bg-gray-100 px-2' to=''>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
            </span>
            Settings
          </Link>
          <Link className=' flex items-center gap-2 py-2 font-medium hover:bg-gray-100 px-2' to=''>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
            </span>
            Logout
          </Link>
        </div>
      </aside>
      <main className=' pl-10 w-3/4 max-md:pl-0 max-md:px-2 max-md:w-full'>
        <div className=' flex items-center mt-4 gap-4'>
          <h1 className=' text-center pb-4 text-green-600 font-semibold text-2xl'>Admin Dashboard</h1>
          <p className=' text-green-400 text-xs'>Welcome to the admin dashboard!</p>
        </div>
        <div className=' grid grid-cols-4 max-sm:grid-cols-2 gap-6 mt-5'>
          <div className=' border border-gray-200 py-2 px-4 flex flex-col justify-center items-center gap-2 rounded-md shadow-2xl shadow-green-200'>
            <p className=' bg-green-500 flex justify-center w-12 rounded-full p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
            </p>
            <span className=' flex flex-col items-center'>
              <span className=' font-medium text-gray-700'>8,756</span>
              <span className=' font-normal text-gray-500'>Daily Visits</span>
            </span>
          </div>
          <div className=' border border-gray-200 py-2 px-4 flex flex-col justify-center items-center gap-2 rounded-md shadow-2xl shadow-blue-200'>
            <p className=' bg-blue-500 flex justify-center w-12 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><g><path d="M0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/></g><g><path d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></g></svg>
            </p>
            <span className=' flex flex-col items-center'>
              <span className=' font-medium text-gray-700'>1,342</span>
              <span className=' font-normal text-gray-500'>Reviews</span>
            </span>
          </div>
          <div className=' border border-gray-200 py-2 px-4 flex flex-col justify-center items-center gap-2 rounded-md shadow-2xl shadow-pink-200'>
            <p className=' bg-pink-500 flex justify-center w-12 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"/></svg>
            </p>
            <span className=' flex flex-col items-center'>
              <span className=' font-medium text-gray-700'>10,756</span>
              <span className=' font-normal text-gray-500'>Comments</span>
            </span>
          </div>
          <div className=' border border-gray-200 py-2 px-4 flex flex-col justify-center items-center gap-2 rounded-md shadow-2xl shadow-yellow-200'>
            <p className=' bg-yellow-500 flex justify-center w-12 rounded-full p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,17c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1l0-0.61 c0-1.18,0.68-2.26,1.76-2.73C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43L0,17 c0,0.55,0.45,1,1,1l3.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1 c0.4,0.68,0.63,1.46,0.63,2.29V18l3.5,0c0.55,0,1-0.45,1-1L24,16.43z M12,6c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3 C9,7.34,10.34,6,12,6z"/></g></svg>
            </p>
            <span className=' flex flex-col items-center'>
              <span className=' font-medium text-gray-700'>100,456</span>
              <span className=' font-normal text-gray-500'>No. of Visits</span>
            </span>
          </div>
        </div>
        <div className=' flex max-md:flex-wrap mt-10 h-screen'>
          <div className=' w-1/3 max-md:w-full'>
            <h2 className=' text-3xl font-semibold py-4 px-2 text-red-600 mt-5 shadow-sm shadow-gray-500'>Recent Posts</h2>
            <div className='nav-wrapper  border-r border-gray-100 overflow-y-auto h-72 flex flex-col gap-4 mt-5'>
              <div className=' border p-2 shadow-2xl'>
                <img className=' w-full h-24 border' src="" alt="Pic" />
                <h2>Heading</h2>
                <p>Author</p>
                <p>Content</p>
              </div>
              <div className=' border p-2 shadow-2xl'>
                <img className=' w-full h-24 border' src="" alt="Pic" />
                <h2>Heading</h2>
                <p>Author</p>
                <p>Content</p>
              </div>
            </div>
          </div>
          <div className=' w-4/6 max-md:w-full pl-5 mt-5'>
            <h2 className=' text-3xl font-semibold py-4 px-2 text-red-600 shadow-sm shadow-gray-500'>Top News Headlines</h2>
            <div className='nav-wrapper overflow-y-auto h-72 flex flex-col gap-4 mt-5'>
              <div className='border p-2 shadow-2xl'>
                <img className=' w-full h-24 border' src="" alt="Pic" />
                <div>
                  <h2>Heading</h2>
                  <p>Content</p>
                  <p>Author</p>
                </div>
              </div>
              <div className='border p-2 shadow-2xl'>
                <img className=' w-full h-24 border' src="" alt="Pic" />
                <div>
                  <h2>Heading</h2>
                  <p>Content</p>
                  <p>Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDash
