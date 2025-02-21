import React from 'react'
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import Juguetes from '../Categorias/Juguetes-Juegos/Juguetes';
import "../Categorias/Juguetes-Juegos/juguetesjuegos.css";
import Juegos from '../Categorias/Juguetes-Juegos/Juegos';

export const JuguetesJuegos = () => {
  return (
    <>
      <Header/>
      <Juguetes/>
      <Juegos/>
      <Footer/>
    </>
  )
}
