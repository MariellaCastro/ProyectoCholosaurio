import React from "react";
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import Ropa from '../Categorias/Ropa-Accesorios/Ropa';
import "../Categorias/Ropa-Accesorios/ropaaccesorios.css";
import Accesorios from '../Categorias/Ropa-Accesorios/Accesorios';

export const RopaAccesorios = ({cart, addToCart}) => {
  
  return (
    <>
      <Header cart={cart} />
      <Ropa />
      <Accesorios addToCart={addToCart}/>
      <Footer />
    </>
  )
}
