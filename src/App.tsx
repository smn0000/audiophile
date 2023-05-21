import "./scss/global.scss"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Product from "./pages/product-details/ProductDetails"
import Checkout from "./pages/checkout/Checkout"
import Footer from "./components/footer/Footer"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/category/:name'
          element={<Category />}
        />
        <Route
          path='/product/:name'
          element={<Product />}
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
