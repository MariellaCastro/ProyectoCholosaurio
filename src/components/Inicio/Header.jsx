import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const paginas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Categorías", url: "#" },
    { nombre: "Marcas", url: "/marcas" },
    { nombre: "¿Quiénes Somos?", url: "/quienes-somos" },
];

const categorias = [
    { nombre: "Figuras de Colección", url: "/figuras-coleccionables" },
    { nombre: "Juguetes y Juegos", url: "/juguetes-juegos" },
    { nombre: "Ropa y Accesorios", url: "/ropa-accesorios" },
    { nombre: "Decoración", url: "/decoracion" },
];

export const Header = ({ cart = [] }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <header>
            <img src="img/inicio/logo.png" alt="Cholosaurio-logo" className='logo-img' />

            <form className="search-bar" onSubmit={handleSearch}>
                <img src="img/inicio/busqueda.png" alt="Buscar" className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
            </form>

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

            <div className="cart-container">
                <div className="cart-icon" onClick={() => navigate("/cart")}>
                    <img src="img/inicio/carritodecompras.png" className="cart-icon-img" alt="Carrito de Compras" />
                    <span className="cart-count">{cart.length}</span>
                </div>
            </div>
        </header>
    );
};
