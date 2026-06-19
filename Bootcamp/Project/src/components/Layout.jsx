import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
