import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      
      {/* Aqui en ( outlet ) se renderizan todos los componentes */}
      <Outlet />

      <Footer />
    </>
  )
}

export default Layout
