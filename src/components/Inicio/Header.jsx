import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const paginas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Categorías", url: "/categorias" },
    { nombre: "Marcas", url: "/marcas" },
    { nombre: "¿Quiénes Somos?", url: "/quienes-somos" },
]
export const Header = () => {
    const [query, setQuery] = useState("");
    return (
        <header>
            <img src="img/inicio/logo.png" alt="Cholosaurio-logo" className='logo-img' />
            <div className="search-bar">
                <img src="img/inicio/busqueda.png" alt="" className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"/>
            </div>
            <ul className="nav-links">
                {paginas.map((pagina, index) => (
                    <li key={index}>
                        <Link to={pagina.url} className="nav-link">
                            {pagina.nombre}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="cart-icon">
                <img src="img/inicio/carritodecompras.png" className="cart-icon-img"/>
            </div>
        </header>
    )
}
