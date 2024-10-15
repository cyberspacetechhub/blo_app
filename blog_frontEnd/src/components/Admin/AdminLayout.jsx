import { Outlet } from 'react-router-dom'
import React from 'react'
import AdminNav from './AdminNav'

const AdminLayout = () => {
  return (
    <div>
      <div>
        <AdminNav/>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
