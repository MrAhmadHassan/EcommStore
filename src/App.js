import "./App.css";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Default />} />
        </Routes>
    </>
  );
}

export default App;
