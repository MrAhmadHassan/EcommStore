const Card = (props)=>{
    const product = props.pro;
    const handleCart=props.handleCart;
    let bclicked = false;
    const subPart = (text)=>{
        return text.slice(0,100);
    }
    const handleprod = (val)=>{
      handleCart(val);
      bclicked=true;
    }
    return <>
    <div key={product.id} className="card" style={{width: "18rem",margin:"5px"}}>
    <img src={product.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">price: {product.price}</p>
      <p className="card-text">{subPart(product.info)}</p>
      <button onClick={()=>handleprod(product)} className="btn btn-primary">{bclicked}</button>
    </div>
    
  </div>
  {/* <br/> */}
</>
}

export default Card;