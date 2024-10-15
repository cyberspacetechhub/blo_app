import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Blogs from './components/Blogs'
import AdminLayout from './components/Admin/AdminLayout'
import AdminDash from './components/Admin/AdminDash'
import CreateBlog from './components/Admin/subComponents/CreateBlog'
import CreateUser from './components/Admin/subComponents/CreateUser'
import Users from './components/Admin/Users'
import BlogDetails from './components/BlogDetails'
import AllBlogs from './components/Admin/AllBlogs'
import UpdateBlog from './components/Admin/subComponents/UpdateBlog'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import PersistLogin from './shared/PersistLogin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<Blogs />} />
          <Route path='/blog_details/:id' element={<BlogDetails />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route path='/login' element={<SignIn />} /> */}
          <Route path='/user_dashboard' element={<Dashboard />} />
        </Route>

          <Route path='/login' element={<Login />} />

       <Route element={<PersistLogin />}>
        <Route path='/admin_dashboard' element={<AdminLayout />}>
          <Route index element={<AdminDash />} />
          <Route path='/admin_dashboard/create_blog' element={<CreateBlog />} />
          <Route path='/admin_dashboard/create_user' element={<CreateUser />} />
          <Route path='/admin_dashboard/update_blog/:id' element={<UpdateBlog />} />
          <Route path='/admin_dashboard/users' element={<Users />} />
          <Route path='/admin_dashboard/blogs' element={<AllBlogs />} />
          </Route>
       </Route>
      </Routes>
    </>
  )
}

export default App
