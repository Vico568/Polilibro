import Footer from "./Footer"
import Header from "./Header"
import Navegador from "./Navegador"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <div className="sticky-top">
            <Header />
            <Navegador />
        </div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout