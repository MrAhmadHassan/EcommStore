import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Title from "../Title";
import { storeProducts } from "../../data";

const ProductList = () => {
    const [products, setProducts] = useState(storeProducts);
    
    const subPart = (text)=>{
        return text.slice(0,100);
    }
    

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products" />
          <div className="row">
            {products.map((product)=>{
                return <>
                <div key={product.id} className="card" style={{width: "18rem",margin:"5px"}}>
                <img src={product.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{subPart(product.info)}</p>
                  <Link href="#" className="btn btn-primary">Add to Cart</Link>
                </div>
                
              </div>
              {/* <br/> */}
            </>
              
            })}

          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
