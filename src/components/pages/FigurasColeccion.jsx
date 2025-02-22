import React from "react";
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import Figuras from '../Categorias/Coleccion/Figuras';
import "../Categorias/Juguetes-Juegos/juguetesjuegos.css";
import Coleccion from '../Categorias/Coleccion/Coleccion';

export const FigurasColeccion = ({cart, addToCart}) => {
  
  return (
    <>
      <Header cart={cart} />
      <Figuras />
      <Coleccion addToCart={addToCart} />
      <Footer />
    </>
  )
}