import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categorias = [
    { imagen: "img/inicio/section/coleccion.png", nombre: "FIGURAS DE COLECCIÓN" },
    { imagen: "img/inicio/section/juguetes.png", nombre: "JUGUETES Y JUEGOS" },
    { imagen: "img/inicio/section/ropa.png", nombre: "ROPA Y ACCESORIOS" },
    { imagen: "img/inicio/section/decoracion.png", nombre: "DECORACIÓN" },
];
const vendidos = [
    { imagen: "img/inicio/section/1.png" },
    { imagen: "img/inicio/section/2.png" },
    { imagen: "img/inicio/section/3.png" },
    { imagen: "img/inicio/section/4.png" },
];
const marcas = [
    { imagen: "img/inicio/section/marcas/mattel.png" },
    { imagen: "img/inicio/section/marcas/p.png" },
    { imagen: "img/inicio/section/marcas/rebor.png" },
    { imagen: "img/inicio/section/marcas/pnso.png" },
    { imagen: "img/inicio/section/marcas/papo.png" },
    { imagen: "img/inicio/section/marcas/collecta.png" },
    { imagen: "img/inicio/section/marcas/s.png" },
    { imagen: "img/inicio/section/marcas/safari.png" },
    { imagen: "img/inicio/section/marcas/eofauna.png" },
]
export const Section = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % marcas.length);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const marcasVisibles = [
        marcas[index % marcas.length],
        marcas[(index + 1) % marcas.length],
        marcas[(index + 2) % marcas.length],
        marcas[(index + 3) % marcas.length]
    ];
    return (
        <section>
            <div className='section-title'>
                <h1>CATEGORIAS</h1>
            </div>
            <div className='section-categorias'>
                {categorias.map((categoria, index) => (
                    <div key={index} className='section-categoria'>
                        <img src={categoria.imagen} alt={categoria.nombre} />
                        <Link className='title'>{categoria.nombre}</Link>
                        
                    </div>
                ))}
            </div>
            <div className='boton-ver-todo'>
                <button>VER TODO</button>
            </div>
            <div className='section-title'>
                <h1>LO MAS VENDIDO</h1>
            </div>
            <div className='section-categorias'>
                {vendidos.map((vendido, index) => (
                    <div key={index} className='section-categoria'>
                        <img src={vendido.imagen} />
                    </div>
                ))}
            </div>
            <div className='boton-ver-todo'>
                <button>VER TODO</button>
            </div>
            <div className='section-title'>
                <h1>MARCAS</h1>
            </div>
            <div className='section-marcas'>
                {marcasVisibles.map((marca, idx) => (
                    <div key={idx} className='section-marca'>
                        <img src={marca.imagen} alt={`Marca ${idx}`} />
                    </div>
                ))}
            </div>
            <div className='boton-ver-todo'>
                <button><Link className='boton' to={"/marcas"}>VER TODO</Link></button>
            </div>
        </section>
    )
}
