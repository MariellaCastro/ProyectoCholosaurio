import React, { useState, useEffect } from "react";

export const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        "/img/inicio/carrusel/1.jpg", "/img/inicio/carrusel/2.jpg",
        "/img/inicio/carrusel/3.jpg", "/img/inicio/carrusel/4.jpg",
        "/img/inicio/carrusel/5.jpg", "/img/inicio/carrusel/6.jpg",
        "/img/inicio/carrusel/7.jpg",
    ];

    function showSlide(index) {
        if (index >= items.length) {
            setCurrentIndex(0);
        } else if (index < 0) {
            setCurrentIndex(items.length - 1);
        } else {
            setCurrentIndex(index);
        }
    }

    function siguiente() {
        showSlide(currentIndex + 1);
    }

    function anterior() {
        showSlide(currentIndex - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            siguiente();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
            <div className="envio-gratis">
                <img src="img/inicio/carrusel/oferta.png" alt="" />
                <h1>Envío GRATUITO por compras superiores a S/200 </h1>
                <h2>¡Aprovecha ahora!</h2>
            </div>
            <div className="carousel-container">
                <div
                    className="carousel-inner"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={item} alt={`Slide ${index + 1}`} />
                        </div>
                   ))}                 
                </div>
            </div>
        </>
    );
};
