import React from "react";
import Juguetes from "./Juguetes";

const products = [
  {
    id: 0,
    name: "Pack caótico de Allosaurus",
    price: "S/ 70",
    image: "/img/categoria/JuguetesJuegos/imagen1.png",
  },
  {
    id: 1,
    name: "Bumpy peluche de felpa",
    price: "S/ 170",
    image: "/img/categoria/JuguetesJuegos/imagen2.png",
  },
  {
    id: 2,
    name: "Dimetrodon Damage",
    price: "S/ 100",
    image: "/img/categoria/JuguetesJuegos/imagen3.png",
  },
  {
    id: 3,
    name: "Pack ben c/ atrociraptor y dilophosaurus",
    price: "S/ 220",
    image: "/img/categoria/JuguetesJuegos/imagen4.png",
  },
  {
    id: 4,
    name: "Pack máscara C/ sonido + garras",
    price: "S/ 250",
    image: "/img/categoria/JuguetesJuegos/imagen5.png",
  },
  {
    id: 5,
    name: "Mososaurio Snap Squad",
    price: "S/ 100",
    image: "/img/categoria/JuguetesJuegos/imagen6.png",
  },
  {
    id: 6,
    name: "Pistolas láser de Jurassic World Dominion",
    price: "S/ 150",
    image: "/img/categoria/JuguetesJuegos/imagen7.png",
  },
  {
    id: 7,
    name: "Máscara de Godzilla C/ sonido",
    price: "S/ 200",
    image: "/img/categoria/JuguetesJuegos/imagen8.png",
  },
  {
    id: 8,
    name: "Juguete de Godzilla",
    price: "S/ 85",
    image: "/img/categoria/JuguetesJuegos/imagen9.png",
  },
  {
    id: 9,
    name: "Juguete de Kong",
    price: "S/ 85",
    image: "/img/categoria/JuguetesJuegos/imagen10.png",
  },
  {
    id: 10,
    name: "Máscara de Kong C/ sonido",
    price: "S/ 200",
    image: "/img/categoria/JuguetesJuegos/imagen11.png",
  },
  {
    id: 11,
    name: "Juguete de Godzilla a control remoto C/ sonido",
    price: "S/ 380",
    image: "/img/categoria/JuguetesJuegos/imagen12.png",
  },
  {
    id: 12,
    name: "Carro explorador de Jurassic Park",
    price: "S/ 90",
    image: "/img/categoria/JuguetesJuegos/imagen13.png",
  },
  {
    id: 13,
    name: "Centro de mando de misión de walkie talkie",
    price: "S/ 230",
    image: "/img/categoria/JuguetesJuegos/imagen14.png",
  },
  {
    id: 14,
    name: "Velociraptor verde gira con un click",
    price: "S/ 70",
    image: "/img/categoria/JuguetesJuegos/imagen15.png",
  },
  {
    id: 15,
    name: "Dinosaurio bebe mecatrónico de color azul",
    price: "S/ 570",
    image: "/img/categoria/JuguetesJuegos/imagen16.png",
  },
  {
    id: 16,
    name: "Pack T-Rex verde C/ Ian C/ carro Mercedes",
    price: "S/ 300",
    image: "/img/categoria/JuguetesJuegos/imagen17.png",
  },
  {
    id: 17,
    name: "Máscara de T-Rex Chomp'n C/ sonido",
    price: "S/ 180",
    image: "/img/categoria/JuguetesJuegos/imagen18.png",
  },
  {
    id: 18,
    name: "Transportador de dinosaurios Break Out",
    price: "S/ 180",
    image: "/img/categoria/JuguetesJuegos/imagen19.png",
  },
  {
    id: 19,
    name: "Juguete sobre la evolución del hombre",
    price: "S/ 50",
    image: "/img/categoria/JuguetesJuegos/imagen20.png",
  },
  {
    id: 20,
    name: "Dino ZAZA C/ sonido y movimiento",
    price: "S/ 85",
    image: "/img/categoria/JuguetesJuegos/imagen21.png",
  },
  {
    id: 21,
    name: "Captura el camión aplastante de JW Dominion",
    price: "S/ 230",
    image: "/img/categoria/JuguetesJuegos/imagen22.png",
  },
  {
    id: 22,
    name: "Luz de noche LED proyectable JW",
    price: "S/ 100",
    image: "/img/categoria/JuguetesJuegos/imagen23.png",
  },
  {
    id: 23,
    name: "Rompe cabezas de dinosaurios",
    price: "S/ 50",
    image: "/img/categoria/JuguetesJuegos/imagen24.png",
  },
];

const Juegos = () => {
    if (!products || products.length === 0) {
      return <p>No hay productos disponibles</p>;
    }
  
    return (
      <div className="container">
        <h2 className="title">JUGUETES Y JUEGOS</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Juguetes key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  export default Juegos;