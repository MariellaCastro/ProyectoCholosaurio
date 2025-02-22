import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx';
import { Marcas } from './components/pages/Marcas.jsx';
import { Nosotros } from './components/pages/Nosotros.jsx';
import { RopaAccesorios } from './components/pages/RopaAccesorios.jsx';
import { JuguetesJuegos } from './components/pages/JuguetesJuegos.jsx';
import { Decoraciones } from './components/pages/Decoraciones.jsx';
import { FigurasColeccion } from './components/pages/FigurasColeccion.jsx';
import { CartPage } from "./components/Carrito/CartPage.jsx";
import { useState } from "react";
import { Busqueda } from './components/pages/Busqueda.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/marcas' element={<Marcas />} />
        <Route path='/quienes-somos' element={<Nosotros />} />
        <Route path='/ropa-accesorios' element={<RopaAccesorios cart={cart} addToCart={addToCart}/>} />
        <Route path='/juguetes-juegos' element={<JuguetesJuegos cart={cart} addToCart={addToCart}/>} />
        <Route path='/decoracion' element={<Decoraciones cart={cart} addToCart={addToCart} />} />
        <Route path='/figuras-coleccionables' element={<FigurasColeccion cart={cart} addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/search" element={<Busqueda cart={cart} addToCart={addToCart} />} />
      </Routes>
    </>
  );
}

export default App;
