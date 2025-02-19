import React from 'react'
import { Link } from 'react-router-dom'

const paginas = [
    { text: "Inicio", link: "/" }, { text: "Categorias", link: "/categorias" }, { text: "Marcas", link: "/marcas" }, { text: "Quienes Somos", link: "/quienes-somos" }
]
const contactos = [
    { img: "ubicacion", text: "Centro Comercial Arenales, Av. Gral. Juan Antonio Álvarez de Arenales 1737, Lince 15073" },
    { img: "telefono", text: "+51 990 270 366" },
    { img: "gmail", text: "ventas@cholosaurio.com" },
]
const mediosPagos = [
    { img: "Visa" }, { img: "MasterCard" }, { img: "VisaElectron" }, { img: "Yape" }, { img: "Plin" },
]
const redesSociales = [
    { img: "Facebook", link: "https://www.facebook.com/cholosaurio/?locale=es_LA" },
    { img: "Tiktok", link: "https://www.tiktok.com/@cholosaurio.store?lang=en" },
    { img: "Maps", link: "https://www.google.com/maps/place/Cholosaurio+STORE/@-12.0818517,-77.0385031,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c9492954b5a1:0x8fb835759254872a!8m2!3d-12.0818517!4d-77.0359282!16s%2Fg%2F11mvqrpn56?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D" },
    { img: "Whatsapp", link: "https://api.whatsapp.com/send?phone=51990270366&text&context=ARCO1zeRjAt7JqSPctEYnxfCqrnAgHb9hunlZjsJ8NzDLehJBVf_9U_KfE1_S6atZ4PDqTUwap-ivWM5W8aMPwxnc_C-6u5X8EoOglbwFZScZlpU22bGW66wyAXE8E-yx7fUk4e-Oo3Uy7aLgQ&source&app=facebook" },
    { img: "Instagram", link: "https://www.instagram.com/cholo.sauriostore/?hl=en" },
]
export const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-column1">
                    <img src="/img/inicio/logo.png" className="footer-logo" />
                    <p className='descripcion'>
                        Única tienda oficial de dinosaurios y criaturas prehistóricas en Perú. Coleccionismo y educación.
                    </p>
                </div>
                <div className="footer-column">
                    <h3>TE AYUDAMOS</h3>
                    {contactos.map((contacto) => (
                        <div className='contacto'>
                            <img src={`img/inicio/footer/contacto/${contacto.img}.png`}></img>
                            <div className='contacto-text'>
                                <p>{contacto.text}</p>
                                <p>{contacto.text2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="footer-column">
                    <h3>PÁGINAS</h3>
                    <ul>
                        {paginas.map((pagina, index) => (
                            <Link className='li' to={pagina.link}>{pagina.text}</Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>MEDIOS DE PAGOS</h3>
                    <div className="payment-icons">
                        {mediosPagos.map((medioPago) => (
                            <img src={`img/inicio/footer/mediosPagos/${medioPago.img}.png`} alt="" />
                        ))}
                    </div>
                    <h3>REDES SOCIALES</h3>
                    <div className="social-icons">
                        {redesSociales.map((redsocial, index) => (
                            <a key={index} href={redsocial.link} target="_blank" rel="noopener noreferrer">
                                <img src={`img/inicio/footer/redesSociales/${redsocial.img}.png`}></img>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
