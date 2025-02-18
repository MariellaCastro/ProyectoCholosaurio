import React, { useState } from 'react';
import { motion } from 'framer-motion';

const marcas = [
  {
    nombre: "Mattel", imagen: "img/inicio/section/marcas/mattel.png",
    descripcion: "Mattel es una de las compañías de juguetes más grandes y reconocidas del mundo, con más de 75 años de historia. Es responsable de la creación de icónicas líneas de juguetes como Barbie, Hot Wheels y Masters of the Universe. En el mundo de los dinosaurios, Mattel ha adquirido la licencia oficial de Jurassic World, desarrollando figuras de acción, vehículos y sets de juego inspirados en la franquicia.",
    redes: { facebook: "https://facebook.com/mattel", instagram: "https://instagram.com/mattel", twiter: "https://x.com/Mattel?ref_src=twsrc%5Etfw" },
    productos: ["Figuras de acción de Jurassic World", "Dinosaurios electrónicos e interactivos con rugidos y luces", " Sets de juego con hábitats jurásicos", "Vehículos y playsets de Jurassic World"]
  },
  {
    nombre: "PNSO",
    imagen: "img/inicio/section/marcas/pnso.png",
    descripcion: "PNSO (Paleontological Science and Art Organization) es una compañía china especializada en la creación de modelos científicos de dinosaurios y criaturas prehistóricas. Sus figuras destacan por su precisión anatómica, textura y pintura realista. Muchos de sus diseños están basados en estudios paleontológicos actualizados.",
    redes: { facebook: "https://www.facebook.com/pnso.us", instagram: "https://www.instagram.com/pnso.official/", twiter: "https://x.com/pnso_official" },
    productos: ["Figuras de dinosaurios a escala", "Modelos científicos de mamíferos prehistóricos", "Libros ilustrados sobre paleontología y dinosaurios", "Colección de mini dinosaurios educativos"]
  },
  {
    nombre: "Rebor",
    imagen: "img/inicio/section/marcas/rebor.png",
    descripcion: "Rebor es una marca británica de figuras coleccionables de dinosaurios, conocida por su realismo extremo, pintura detallada y poses dinámicas. Sus productos están dirigidos a coleccionistas adultos y suelen lanzar ediciones limitadas con materiales de alta calidad.",
    redes: { facebook: "https://www.facebook.com/reborstudio/?locale=es_LA", instagram: "https://www.instagram.com/rebor_studio/?hl=es" },
    productos: ["Figuras de dinosaurios hiperrealistas", "Figuras con articulaciones y opciones de personalización"]
  },
  {
    nombre: "Safari Ltd", imagen: "img/inicio/section/marcas/safari.png", descripcion: "Safari Ltd es una empresa estadounidense que desde 1982 se especializa en figuras educativas de animales, incluyendo una de las líneas más completas de dinosaurios. Sus modelos están diseñados con un enfoque didáctico y basados en evidencia científica.", redes: { facebook: "https://www.facebook.com/safariltd/", instagram: "https://www.instagram.com/safariltd/", twiter: "https://x.com/safariltd?lang=es" }, productos: ["Dinosaurios con modelos educativos", "Criaturas marinas prehistóricas y reptiles voladores", " Juegos educativos sobre la era de los dinosaurios"]
  },
  {
    nombre: "Eofauna", imagen: "img/inicio/section/marcas/eofauna.png", descripcion: "Eofauna es una marca española de figuras de dinosaurios y animales prehistóricos, reconocida por su calidad y precisión científica. Sus modelos son fruto de la colaboración con paleontólogos y expertos en reconstrucción paleoartística.", redes: { facebook: "https://facebook.com/eofauna", instagram: "https://instagram.com/eofauna", twiter: "" }, productos: ["Figuras de dinosaurios a escala", "Modelos de animales prehistóricos"]
  },
  {
    nombre: "Papo", imagen: "img/inicio/section/marcas/papo.png",
    descripcion: "Papo es una marca francesa de figuras de acción y animales de juguete, con una amplia gama de dinosaurios y criaturas prehistóricas. Sus productos destacan por su calidad, detalles y diseño artístico.", redes: { facebook: "https://www.facebook.com/FigurinesPapo/", instagram: "https://www.instagram.com/papo.officiel/" }, productos: [" Figuras de dinosaurios articuladas y con texturas realistas", "Dinosaurios con pintura detallada y acabados premium", "Modelos inspirados en las películas de Jurassic Park"]
  },
  {
    nombre: "CollectA", imagen: "img/inicio/section/marcas/collecta.png",
    descripcion: "CollectA es una marca de figuras de animales y dinosaurios con sede en Hong Kong, reconocida por su variedad de especies y modelos realistas. Sus productos abarcan desde dinosaurios clásicos hasta criaturas prehistóricas menos conocidas.", redes: { facebook: "https://www.facebook.com/CollectA.biz", instagram: "https://www.instagram.com/collecta_figurines/?hl=es" }, productos: ["Figuras de dinosaurios a escala", "Modelos de animales prehistóricos", "Criaturas marinas y reptiles voladores"]
  },
  {
    nombre: "Schleich ", imagen: "img/inicio/section/marcas/s.png",
    descripcion: "Schleich es una marca alemana de figuras de animales y dinosaurios, reconocida por su calidad y detalles realistas. Sus productos están diseñados para fomentar el juego creativo y la exploración del mundo natural.", redes: { facebook: "https://www.facebook.com/SchleichES", instagram: "https://www.instagram.com/schleichofficial/" }, productos: ["Figuras de dinosaurios y animales realistas", "Sets de juego con hábitats y accesorios", "Colecciones temáticas de dinosaurios y criaturas prehistóricas"]
  },
  {
    nombre: "Nanmu", imagen: "img/inicio/section/marcas/p.png",
    descripcion: "Nanmu es una marca china de figuras de dinosaurios y criaturas prehistóricas, reconocida por su calidad y diseño innovador. Sus productos suelen ser figuras de acción con articulaciones, texturas realistas y detalles anatómicos.", redes: { facebook: "https://www.facebook.com/Nanmutoys/?locale=es_LA", instagram: "https://www.instagram.com/nanmustudio/?hl=es", twiter: "https://x.com/Nanmu_studio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" }, productos: ["Figuras de dinosaurios articuladas", "Modelos de animales prehistóricos con texturas realistas", "Criaturas fantásticas y seres mitológicos"]
  },
];

export const SesionMarcas = () => {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [indiceCarrusel, setIndiceCarrusel] = useState(0);

  const avanzarCarrusel = () => {
    setIndiceCarrusel((prev) => (prev + 3) % marcas.length);
  };

  const retrocederCarrusel = () => {
    setIndiceCarrusel((prev) => (prev - 3 + marcas.length) % marcas.length);
  };

  return (
    <section className="marcas-section">
      <h1 className="titulo-marcas">MARCAS</h1>
      {marcaSeleccionada ? (
        <>
          <motion.div className="detalle-marca" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <img src={marcaSeleccionada.imagen} alt={marcaSeleccionada.nombre} className="detalle-imagen" />
            <div className="detalle-info">
              <h2>{marcaSeleccionada.nombre}</h2>
              <p>{marcaSeleccionada.descripcion}</p>
              <h3>Productos:</h3>
              <ul>
                {marcaSeleccionada.productos.map((producto, index) => (
                  <li key={index}>{producto}</li>
                ))}
              </ul>
              <h3>Redes Sociales:</h3>
              <ul>
                <li><a href={marcaSeleccionada.redes.facebook} target="_blank">Facebook</a></li>
                <li><a href={marcaSeleccionada.redes.instagram} target="_blank">Instagram</a></li>
                {marcaSeleccionada.redes.twiter && (
                  <li><a href={marcaSeleccionada.redes.twiter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                )}
              </ul>
              <button onClick={() => setMarcaSeleccionada(null)}>❌ Cerrar</button>
            </div>
          </motion.div>
          <div className="carrusel">
            <button onClick={retrocederCarrusel}>◄</button>
            <div className="carrusel-marcas">
              {marcas.slice(indiceCarrusel, indiceCarrusel + 3).map((marca, index) => (
                <img key={index} src={marca.imagen} alt={marca.nombre} className="carrusel-imagen" onClick={() => setMarcaSeleccionada(marca)} />
              ))}
            </div>
            <button onClick={avanzarCarrusel}>►</button>
          </div>
        </>
      ) : (
        <div className="marcas-grid">
          {marcas.map((marca, index) => (
            <div key={index} className="marca-card" onClick={() => setMarcaSeleccionada(marca)}>
              <img src={marca.imagen} alt={marca.nombre} className="marca-imagen" />
              <button className="marca-boton">INFORMACIÓN</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

