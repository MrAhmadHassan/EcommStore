import { Link } from "react-router-dom";
import "./style.css";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="left">
          <div className="herocontent">
            <h2 className="herologo" style={{ color: "white" }}>AHMI CO. 😎</h2>
            <p style={{ color: "white",marginBottom:"25px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              fuga corporis sint magnam unde labore, eaque rem debitis nihil,
            </p>
            <Link to={"/products"} className="herobutton">
              Explore products
            </Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default Hero;
