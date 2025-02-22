import React from 'react'
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import { Resultados } from '../Busqueda/Resultados'
 import '../Busqueda/search.css'

export const Busqueda = ({cart, addToCart}) => {
  return (
    <>
    <Header cart={cart} />
    <Resultados addToCart={addToCart}/>
    <Footer/>
    </>
  )
}
