import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-navigation">
                    <h5>Encuentra lo que buscas</h5>
                    <ul>
                        <li><a href="#">Productos</a></li>
                        {/* <li><a href="#">Nosotros</a></li> */}
                        <li><a href="/contacto">Contacto</a></li>                    </ul>
                </div>
                <div className="footer-navigation">
                    <h5>Enlaces relacionados</h5>
                    <ul>
                        <li><a target="_blank" href="/files/Legal-AbleTo.pdf">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-image-banner">
                    <img src="/images/landing/blind-person-computer.jpeg" alt="" />
                </div>
            </div>
            <div className="footer-secondary">
                <span>©2024 Ableto</span>
                <img src="/images/ableto-transparent.png" alt="" />
                <div className="footer-socials">
                    <a href="#"><img src="/images/icons/linkedin-social.svg" alt="" /></a>
                    {/* <a href="#"><img src="/images/icons/github-social.svg" alt="" /></a> */}
                    <a href="#"><img src="/images/icons/instagram-social.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    );
}