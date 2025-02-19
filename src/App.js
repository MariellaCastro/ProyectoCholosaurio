import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx';
import { Marcas } from './components/pages/Marcas.jsx';
import { Nosotros } from './components/pages/Nosotros.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/marcas' element={<Marcas/>} />
        <Route path='/quienes-somos' element={<Nosotros/>} />
      </Routes>
    </>
  );
}

export default App;
