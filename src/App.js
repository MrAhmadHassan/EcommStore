import "./App.css";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { Routes, Route } from "react-router-dom";
import { storeProducts } from './data';
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState(()=> {
    return JSON.parse(localStorage.getItem('cartItems')) || []
  });
  const [products, setProducts] = useState(storeProducts);

  const handleCart = (item) => {
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      if (element.id == item.id) {
        toast.error("Item already in cart");
        return;
      }
    }
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  }

  const deleteCartItem = (item) => {
    const cartwithoutItem = cartItems.filter((p) => {
      return p !== item;
    })
    setCartItems(cartwithoutItem)
  }
  const deleteAllCartItem = () => {
    setCartItems([]);
  }

  const handleFilter = (data) => {
    if (data === "") { setProducts(storeProducts); return; }
    const filterBySearch = storeProducts.filter((item) => {
      if (item.title.toLowerCase()
        .includes(data.toLowerCase())) { return item; }
    })
    setProducts(filterBySearch);
  }




  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    console.log(items);
    if (items) {
      setCartItems(items);
    }
  }, []);


  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Routes>
        <Route exact path="/" element={<Hero data={storeProducts} handleCart={handleCart} />} />
        <Route exact path="/products" element={<ProductList data={products} handleCart={handleCart} handleFilter={handleFilter} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} deleteCartItem={deleteCartItem} deleteAllCartItem={deleteAllCartItem} />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
