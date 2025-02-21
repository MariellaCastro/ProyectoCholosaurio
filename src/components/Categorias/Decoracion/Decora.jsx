import React from "react";

const Decora = ({ product }) => {
  if (!product) {
    return <p></p>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <button className="product-button">Añadir al carrito</button>
    </div>
  );
};

export default Decora;
