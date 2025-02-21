import React from 'react'
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import Figuras from '../Categorias/Coleccion/Figuras';
import "../Categorias/Juguetes-Juegos/juguetesjuegos.css";
import Coleccion from '../Categorias/Coleccion/Coleccion';

export const FigurasColeccion = () => {
  return (
    <>
      <Header/>
      <Figuras/>
      <Coleccion/>
      <Footer/>
    </>
  )
}
