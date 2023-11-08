import './style.css';
const Card = (props)=>{
    const product = props.pro;
    const handleCart=props.handleCart;

    
    const subPart = (text)=>{
        return text.slice(0,100);
    }


    
    return <>
    <div key={product.id} className="card" >
    <img src={product.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">price: {product.price}</p>
      <p className="card-text">{subPart(product.info)}</p>
      <button onClick={()=>handleCart(product)} className="btn btn-primary">Add to Cart</button>
    </div>
    
  </div>
  {/* <br/> */}
</>
}

export default Card;