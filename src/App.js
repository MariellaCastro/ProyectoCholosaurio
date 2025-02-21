import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx';
import { Marcas } from './components/pages/Marcas.jsx';
import { Nosotros } from './components/pages/Nosotros.jsx';
import { RopaAccesorios } from './components/pages/RopaAccesorios.jsx';
import { JuguetesJuegos } from './components/pages/JuguetesJuegos.jsx';
import { Decoraciones } from './components/pages/Decoraciones.jsx';
import { FigurasColeccion } from './components/pages/FigurasColeccion.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/marcas' element={<Marcas/>} />
        <Route path='/quienes-somos' element={<Nosotros/>} />
        <Route path='/ropa-accesorios' element={<RopaAccesorios/>} />
        <Route path='/juguetes-juegos' element={<JuguetesJuegos/>} />
        <Route path='/decoracion' element={<Decoraciones/>} />
        <Route path='/figuras-coleccionables' element={<FigurasColeccion/>} />
      </Routes>
    </>
  );
}

export default App;
