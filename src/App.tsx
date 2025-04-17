import { Outlet } from "react-router"
import Navbar from "./components/base/Nav"
import Footer from "./components/base/Footer"

function App() {
  return (
    <>
    <Navbar/>
       <Outlet/>
    <Footer/>
    </>
  )
}

export default App
