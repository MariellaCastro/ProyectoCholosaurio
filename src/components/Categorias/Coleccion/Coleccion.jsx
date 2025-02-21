import React from "react";
import Figuras from "./Figuras";

const products = [
    {
        id: 0,
        name: "Reina blanca / caballero de sangre",
        price: "S/ 240",
        image: "/img/categoria/Coleccion/imagen1.png",
      },
      {
        id: 1,
        name: "Qingge, los terizinosaurios",
        price: "S/ 190",
        image: "/img/categoria/Coleccion/imagen2.png",
      },
      {
        id: 2,
        name: "tylosaurus proriger charon",
        price: "S/ 400",
        image: "/img/categoria/Coleccion/imagen3.png",
      },
      {
        id: 3,
        name: "Esqueleto embrionario Bony bonnie",
        price: "S/ 1300",
        image: "/img/categoria/Coleccion/imagen4.png",
      },
      {
        id: 4,
        name: "El mamenchisaurio",
        price: "S/ 350",
        image: "/img/categoria/Coleccion/imagen5.png",
      },
      {
        id: 5,
        name: "Punzón de Dimorphodon macronyx",
        price: "S/ 280",
        image: "/img/categoria/Coleccion/imagen6.png",
      },
      {
        id: 6,
        name: "Dimorphodon hembra Judy",
        price: "S/ 260",
        image: "/img/categoria/Coleccion/imagen7.png",
      },
      {
        id: 7,
        name: "Carnotaurus sastrei rey",
        price: "S/ 380",
        image: "/img/categoria/Coleccion/imagen8.png",
      },
      {
        id: 8,
        name: "Samuel el alamosaurio",
        price: "S/ 380",
        image: "/img/categoria/Coleccion/imagen9.png",
      },
      {
        id: 9,
        name: "Apatosaurio",
        price: "S/ 400",
        image: "/img/categoria/Coleccion/imagen10.png",
      },
      {
        id: 10,
        name: "Euhelopo",
        price: "S/ 380",
        image: "/img/categoria/Coleccion/imagen11.png",
      },
      {
        id: 11,
        name: "Mutatesaurus mordred verde C/ accesorios",
        price: "S/ 750",
        image: "/img/categoria/Coleccion/imagen12.png",
      },
      {
        id: 12,
        name: "Diplodocus carnegii Astrónomo",
        price: "S/ 500",
        image: "/img/categoria/Coleccion/imagen13.png",
      },
      {
        id: 13,
        name: "Doyle el triceratops con base",
        price: "S/ 320",
        image: "/img/categoria/Coleccion/imagen14.png",
      },
      {
        id: 14,
        name: "Spinosaurus albino - suplantador 2.0 C/ base",
        price: "S/ 750",
        image: "/img/categoria/Coleccion/imagen15.png",
      },
      {
        id: 15,
        name: "Rarezas ext. mármol neoclásico victoriano",
        price: "S/ 400",
        image: "/img/categoria/Coleccion/imagen16.png",
      },
      {
        id: 16,
        name: "Acrocanthosaurus atokensis Hércules",
        price: "S/ 600",
        image: "/img/categoria/Coleccion/imagen17.png",
      },
      {
        id: 17,
        name: "Mutatesaurus mordred rojo y negro",
        price: "S/ 700",
        image: "/img/categoria/Coleccion/imagen18.png",
      },
      {
        id: 18,
        name: "Esien el spinosaurio",
        price: "S/ 400",
        image: "/img/categoria/Coleccion/imagen19.png",
      },
      {
        id: 19,
        name: "Extincion de rarezas del rebor - rebor",
        price: "S/ 700",
        image: "/img/categoria/Coleccion/imagen20.png",
      },
      {
        id: 20,
        name: "Dinosaurio gris con azul Jurassic Park",
        price: "S/ 250",
        image: "/img/categoria/Coleccion/imagen21.png",
      },
      {
        id: 21,
        name: "Embrion de Dinosaurio",
        price: "S/ 560",
        image: "/img/categoria/Coleccion/imagen22.png",
      },
      {
        id: 22,
        name: "Esqueleto de Dinosaurio bebe dentro de su huevo",
        price: "S/ 400",
        image: "/img/categoria/Coleccion/imagen23.png",
      },
      {
        id: 23,
        name: "Huevo deinosuchus cría meta C/ base",
        price: "S/ 480",
        image: "/img/categoria/Coleccion/imagen24.png",
      },
];

const Coleccion = () => {
    if (!products || products.length === 0) {
      return <p>No hay productos disponibles</p>;
    }
  
    return (
      <div className="container">
        <h2 className="title">FIGURAS DE COLECCION</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Figuras key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  export default Coleccion;