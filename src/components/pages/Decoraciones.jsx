import React from "react";
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import Decora from '../Categorias/Decoracion/Decora';
import "../Categorias/Decoracion/decoraciones.css";
import Ciones from '../Categorias/Decoracion/Ciones';

export const Decoraciones = ({cart, addToCart}) => {

  return (
    <>
      <Header cart={cart} />
      <Decora />
      <Ciones addToCart={addToCart} />
      <Footer/>
    </>
  )
}
