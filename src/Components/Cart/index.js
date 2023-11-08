import React from "react";
import "./style.css";
const Cart = (props) => {
  let cartItems  = props.cartItems;
  const deleteCartItem  = props.deleteCartItem;
  const deleteAllCartItem=props.deleteAllCartItem;
  // Check if cartItems is not defined or if it's an empty array
  const handleDelete = (item)=>{
   deleteCartItem(item)
  }

  let tp=0
  for (let index = 0; index < cartItems.length; index++) {
    const price = cartItems[index].price;
    tp = tp+price;
  }
  console.log(tp);
  if (cartItems.length === 0) {
    return <div style={{height: '100vh',width:'100%'}}>
      <h1 className="text-center mt-5">YOUR CART IS EMPTY...</h1>;
      </div>
  }
  return (<>
    <div className="cart-container container mt-3 mb-5">
      <h2>Cart items</h2>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <div key={item.id} className="cart-item">
          <img
            className="product-image"
            src={item.img}
            alt="Product Image"
          />
          
          <div className="product-details d-flex justify-content-between">
            <h1 className="product-price">${item.price}</h1>
            <h3 className="product-name">{item.title}</h3>
            
            <div className="quantity">
              <button className="quantity-btn minus">-</button>
              <input className="quantity-input" type="number"  min="1" />
              <button className="quantity-btn plus">+</button>
            </div>
            <button className="remove-btn" onClick={()=>handleDelete(item)}>Remove</button>
          </div>
        </div>;
        })}
        <p className="subtotal">Subtotal: ${tp}</p>
        <button className="remove-btn" onClick={()=>deleteAllCartItem()}>Delete All</button>
      </div>
    </div>
    </>
  );
};

export default Cart;
