"use client";

import React, { useEffect } from "react";

import Preloader from "@components/shared/Preloader";
import Navbar from "@components/shared/Navbar";
import Footer from "@components/shared/Footer";
import "./page.css";

import AnimationsRepository from "@repositories/animations.repository";

export default function Home() {

  useEffect(() => {
    AnimationsRepository.initialSetup();
  }, []);

  return (
    <body>
      <Preloader />
      <div className="landing-wrapper general-wrapper">
        <header>
          <Navbar />
          <section className="hero-section">
              <div className="hero-content">
                  <div className="hero-content-text">
                      <div>
                        <h1 className="text-animate">Creando Braille</h1>
                      </div>
                      <div>
                        <h2 className="text-animate">accesible.</h2>
                      </div>
                      <div>
                        <p className="text-animate">Transformamos el sector de la salud mediante tecnología <strong>ética y compasiva</strong> para asistir a aquellos que más lo necesitan.</p>
                      </div>
                  </div>
                  <a href="/productos" className="hero-action-button main-action-button fade-animate">
                      <span>CONOCE MÁS</span>
                      <img src="/images/icons/up-more-arrows.svg" alt="" />
                  </a>
              </div>
              <div className="hero-graphics">
                  <img className="fade-animate" src="/images/landing/blind-person-using.png" alt="" />
              </div>
          </section>
          <img className="header-background opacity-animate" src="/images/backgrounds/landing-header-rectangle.svg" alt="hero background rectangle"></img>
        </header>

        <main></main>

        <Footer></Footer>
      </div>
    </body>
  );
}