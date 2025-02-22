import React from "react";
import Decora from "./Decora";

const products = [
  {
    id: 0,
    name: "Retrato de la cabeza del sinoceratops",
    price: "S/ 450",
    image: "/img/categoria/Decoracion/imagen1.png",
  },
  {
    id: 1,
    name: "Retrato de la cabeza del tiranosaurio",
    price: "S/ 350",
    image: "/img/categoria/Decoracion/imagen2.png",
  },
  {
    id: 2,
    name: "Retrato de la cabeza del carnotaurus",
    price: "S/ 350",
    image: "/img/categoria/Decoracion/imagen3.png",
  },
  {
    id: 3,
    name: "Retrato de la cabeza del qianzhousaurus",
    price: "S/ 350",
    image: "/img/categoria/Decoracion/imagen4.png",
  },
  {
    id: 4,
    name: "Museo de cápsulas de Stegosaurus",
    price: "S/ 40",
    image: "/img/categoria/Decoracion/imagen5.png",
  },
  {
    id: 5,
    name: "Museo de cápsulas de T-Rex",
    price: "S/ 40",
    image: "/img/categoria/Decoracion/imagen6.png",
  },
  {
    id: 6,
    name: "Ajedrez Oficial Jurassic Park",
    price: "S/ 360",
    image: "/img/categoria/Decoracion/imagen7.png",
  },
  {
    id: 7,
    name: "Estudios de fósiles ceratosaurus dentisulcatus",
    price: "S/ 250",
    image: "/img/categoria/Decoracion/imagen8.png",
  },
  {
    id: 8,
    name: "Estudios de fósiles carnotaurus sastrei",
    price: "S/ 250",
    image: "/img/categoria/Decoracion/imagen9.png",
  },
];

const Ciones = ({addToCart}) => {
    if (!products || products.length === 0) {
      return <p>No hay productos disponibles</p>;
    }
  
    return (
      <div className="container">
        <h2 className="title">DECORACIONES</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Decora key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
      </div>
    );
  };

  export default Ciones;
  export { products };  