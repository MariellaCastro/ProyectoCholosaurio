import React from 'react'
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import { SesionMarcas } from '../Marcas/SesionMarcas'
import "../Marcas/marca.css";

export const Marcas = () => {
  return (
    <>
      <Header/>
      <SesionMarcas/>
      <Footer/>
    </>
  )
}
