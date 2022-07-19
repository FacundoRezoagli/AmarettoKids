import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCardDetail.css";
const ProductCardDetail = ({ product } ) => {
  //console.log(product);
  const navigate = useNavigate();

  const handleDetail = (num) => {
      navigate("/cart");
    }
  return (
    <div className="productcard">
      <title>{product.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
        rel="stylesheet"
      ></link>
      <div className="wrapper">
        <div className="product-img">
          <img src={product.image} height="420" width="327"alt={product.title}></img>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.title}</h1>
            <h2>by amaretto and friends</h2>
            {product.description}
          </div>
          <div className="product-price-btn">
            <p>
              <span>{product.price}</span>$
            </p>
            <button type="button" onClick={handleDetail}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCardDetail;
