import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import CatDetails from "./pages/CatDetails";
import AboutUs from "./pages/AboutUs";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
