import React from "react";
import Ropa from "./Ropa";

const products = [
  {
    id: 0,
    name: "Polera Jurassic Park",
    price: "S/ 30",
    image: "/img/categoria/RopaAccesorios/imagen1.png",
  },
  {
    id: 1,
    name: "Mochila Jurassic Park",
    price: "S/ 330",
    image: "/img/categoria/RopaAccesorios/imagen2.png",
  },
  {
    id: 2,
    name: "Mochila de Dinosaurio",
    price: "S/ 300",
    image: "/img/categoria/RopaAccesorios/imagen3.png",
  },
  {
    id: 3,
    name: "Juego de tazas 3D Dinosaurio",
    price: "S/ 90",
    image: "/img/categoria/RopaAccesorios/imagen4.png",
  },
  {
    id: 4,
    name: "Medias largas de Dinosaurio",
    price: "S/ 20",
    image: "/img/categoria/RopaAccesorios/imagen5.png",
  },
  {
    id: 5,
    name: "Medias largas Jurassic Park",
    price: "S/ 20",
    image: "/img/categoria/RopaAccesorios/imagen6.png",
  },
  {
    id: 6,
    name: "Taza con huella de Dinosaurio",
    price: "S/ 70",
    image: "/img/categoria/RopaAccesorios/imagen7.png",
  },
  {
    id: 7,
    name: "Medias cortas de Jurassic Park",
    price: "S/ 30",
    image: "/img/categoria/RopaAccesorios/imagen8.png",
  },
  {
    id: 8,
    name: "Llavero de cabeza de Dinosaurio",
    price: "S/ 25",
    image: "/img/categoria/RopaAccesorios/imagen9.png",
  },
  {
    id: 9,
    name: "Camiseta de Jurassic Park",
    price: "S/ 50",
    image: "/img/categoria/RopaAccesorios/imagen10.png",
  },
  {
    id: 10,
    name: "Libro sobre Dinosaurios y animales prehistóricos del Perú",
    price: "S/ 60",
    image: "/img/categoria/RopaAccesorios/imagen11.png",
  },
];

const Accesorios = () => {
    if (!products || products.length === 0) {
      return <p>No hay productos disponibles</p>;
    }
  
    return (
      <div className="container">
        <h2 className="title">ROPA Y ACCESORIOS</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Ropa key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  export default Accesorios;