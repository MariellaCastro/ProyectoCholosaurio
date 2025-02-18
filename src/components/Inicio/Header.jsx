import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const paginas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Categorías", url: "#" },
    { nombre: "Marcas", url: "/marcas" },
    { nombre: "¿Quiénes Somos?", url: "/quienes-somos" },
];

const categorias = [
    { nombre: "Figuras de Colección", url: "/figuras" },
    { nombre: "Juguetes y Juegos", url: "/juguetes" },
    { nombre: "Ropa y Accesorios", url: "/ropa" },
    { nombre: "Decoración", url: "/decoracion" },
];

export const Header = () => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <img src="img/inicio/logo.png" alt="Cholosaurio-logo" className='logo-img' />

            <div className="search-bar">
                <img src="img/inicio/busqueda.png" alt="Buscar" className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <ul className="nav-menu">
                {paginas.map((pagina, index) => (
                    <li key={index} className={pagina.nombre === "Categorías" ? "dropdown-container" : ""}>
                        {pagina.nombre === "Categorías" ? (
                            <div
                                className="dropdown-toggle"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >
                                Categorías
                                {isOpen && (
                                    <ul
                                        className="dropdown-menu"
                                        onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)}
                                    >
                                        {categorias.map((categoria, index) => (
                                            <li key={index}>
                                                <Link to={categoria.url} className="dropdown-item">
                                                    {categoria.nombre}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link to={pagina.url} className="nav-link">
                                {pagina.nombre}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            <div className="cart-icon">
                <img src="img/inicio/carritodecompras.png" className="cart-icon-img" alt="Carrito de Compras" />
            </div>
        </header>
    );
};
