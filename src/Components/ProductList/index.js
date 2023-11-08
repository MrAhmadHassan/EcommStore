import Title from "../Title";
import Card from "../../Components/Card";
import Search from "../Filter";
const ProductList = (props) => {
  const data = props.data;
  const handleCart = props.handleCart;
  const handleFilter = props.handleFilter;
  return (
    <>
      <div className="py-5">
      
        <div className="container">
        <Search handleFilter={handleFilter} />
          <Title name="" title="Products" />
          
          <div className="row">
            {data.map((product) => {
              return (
                <div key={product.id} className="col-sm-4">
                  <Card pro={product} handleCart={handleCart} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
