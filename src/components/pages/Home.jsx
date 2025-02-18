import React from 'react'
import { Header } from '../Inicio/Header'
import "../Inicio/inicio.css"; 
import { Carrusel } from '../Inicio/Carrusel';
import { Section } from '../Inicio/Section';
import { Footer } from '../Inicio/Footer';

export const Home = () => {
  return (
    <>
        <Header/>
        <Carrusel/>
        <Section/>
        <Footer/>
    </>
  )
}
