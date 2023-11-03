import "./App.css";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import Hero from "./Components/Hero"
// import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { Routes, Route } from "react-router-dom";
import {storeProducts} from './data';
import { useState } from "react";
import Footer from "./Components/Footer";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(storeProducts);
  
  
  const handleCart = (item) => {
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      if (element===item) {
        alert("Item is already in Cart")
        return;
      }      
    }
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  }

  const deleteCartItem = (item)=>{
    const cartwithoutItem = cartItems.filter((p)=>{
      return p!==item;
   })
   setCartItems(cartwithoutItem)
  }
  const deleteAllCartItem = ()=>{
   setCartItems([]);
  }

  const handleFilter = (data)=>{
    console.log(data);
        if (data === "") { setProducts(storeProducts); return; } 
        const filterBySearch = storeProducts.filter((item) => { 
            if (item.title.toLowerCase() 
                .includes(data.toLowerCase())) { return item; } 
        }) 
        setProducts(filterBySearch); 
      
  }

  return (
    <>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Hero data={storeProducts} handleCart={handleCart} />} />
          <Route exact path="/products" element={<ProductList data={products} handleCart={handleCart} handleFilter={handleFilter} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} deleteCartItem={deleteCartItem} deleteAllCartItem={deleteAllCartItem} />}/>
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
