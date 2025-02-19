import React from 'react'
import { Header } from '../Inicio/Header'
import { Footer } from '../Inicio/Footer'
import QuienesSomos from '../Nosotros/QuienesSomos';
import "../Nosotros/nosotros.css";
import Features from '../Nosotros/Features';

export const Nosotros = () => {
  return (
    <>
      <Header/>
      <QuienesSomos/>
      <Features/>
      <Footer/>
    </>
  )
}
