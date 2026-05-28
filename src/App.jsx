import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Cats from './pages/Cats'
import CatDetails from './pages/CatDetails'
import AboutUs from './pages/AboutUs'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(cat) {
    setCartItems(prev => {
      if (prev.some(item => item.id === cat.id)) {
        return prev
      }
    return [...prev, cat]
  })
  }

  function removeFromCart(cat) {
    setCartItems(prev => prev.filter(item => item.id !== cat.id))
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cats' element={<Cats addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />} />
        <Route path='/cats/:id' element={<CatDetails />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/shopping-cart' element={<ShoppingCart cartItems={cartItems}/>} />
      </Routes>
    </>
  )
}

export default App
