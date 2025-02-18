import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx';
import { Marcas } from './components/pages/Marcas.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/marcas' element={<Marcas/>} />
      </Routes>
    </>
  );
}

export default App;
