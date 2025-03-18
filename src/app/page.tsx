"use client";

import { useState } from "react";
import Navbar from "@components/shared/Navbar";
import Footer from "@components/shared/Footer";
import "./page.css";

export default function Home() {
  return (
    <div className="landing-wrapper">
      <header>
        <Navbar />
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-content-text">
                    <h1>Creando Braille</h1>
                    <h2>accesible.</h2>
                    <p>Transformamos el sector de la salud mediante tecnología <strong>ética y compasiva</strong> para asistir a aquellos que más lo necesitan.</p>
                </div>
                <a href="/productos" className="hero-action-button main-action-button">
                    <span>CONOCE MÁS</span>
                    <img src="/images/icons/up-more-arrows.svg" alt="" />
                </a>
            </div>
            <div className="hero-graphics">
                <img src="/images/landing/blind-person-using.png" alt="" />
            </div>
        </section>
        <img className="header-background" src="/images/backgrounds/landing-header-rectangle.svg" alt="hero background rectangle"></img>
      </header>

      <Footer></Footer>
    </div>
  );
}