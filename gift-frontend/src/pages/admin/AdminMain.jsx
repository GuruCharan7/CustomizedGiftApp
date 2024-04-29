import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminNavbar from '../../components/AdminNavbar'

const AdminMain = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <AdminNavbar />
      <main>
        {children}
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white">&copy; {new Date().getFullYear()} FERNS N PETALS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default AdminMain