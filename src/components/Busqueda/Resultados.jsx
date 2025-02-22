import React from "react";
import { useLocation } from "react-router-dom";
import { products as decoracion } from "../Categorias/Decoracion/Ciones.jsx";
import { products as coleccion } from "../Categorias/Coleccion/Coleccion.jsx";
import { products as juguetes } from "../Categorias/Juguetes-Juegos/Juegos.jsx";
import { products as ropa } from "../Categorias/Ropa-Accesorios/Accesorios.jsx";

const allProducts = [...decoracion, ...coleccion, ...juguetes, ...ropa];

export const Resultados = ({ product, addToCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const resultados = allProducts.filter(producto =>
    producto.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="title-resultados">Resultados de búsqueda para: "{query}"</h2>
      {resultados.length > 0 ? (
        <div className="product-grid">
          {resultados.map((producto) => (
            <div key={producto.id} className="product-card">
              <img src={producto.image} alt={producto.name} className="product-image" />
              <h3 className="product-name">{producto.name}</h3>
              <p className="product-price">{producto.price}</p>
              <button className="product-button" onClick={() => addToCart(producto)}>
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};