import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
// import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import banner_men from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={banner_men} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={banner_women} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={banner_kids} category="kid" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Pages/Product" element={<Product />} />
         <Route path=":productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;