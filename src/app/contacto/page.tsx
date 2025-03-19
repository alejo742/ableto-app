"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import "./contacto.css";
import Preloader from "@components/shared/Preloader";
import Navbar from "@components/shared/Navbar";

import AnimationsRepository from "@repositories/animations.repository";

export default function Contacto() {
    useEffect(() => {
        AnimationsRepository.initialSetup();
    }, []);

  return (
    <body>
        <Preloader />
        <div className="general-wrapper">
            <Navbar />
            <div className="contact-wrapper">
                <div className="contact-graphics opacity-animate"></div>
                <div className="contact-container">
                    <Link href="/" className="fade-animate">
                        <img src="/images/ableto-transparent.png" alt="Logo AbleTo" />
                    </Link>
                    <div className="contact-heading">
                        <div>
                            <h1 className="text-animate">Contáctanos</h1>
                        </div>
                        <div>
                            <p className="text-animate">Usa este formulario para contactarte con el equipo detrás de AbleTo. ¡Estaremos felices de ayudarte!</p>
                        </div>
                    </div>
                    <form action="https://api.web3forms.com/submit" method='POST' className="contact-form">

                        <input type="hidden" name="access_key" value="f4df650b-9eff-457b-85b4-9deaeb605cc6"/>
                        <input type="hidden" name="from_name" value="Contacto Info AbleTo"></input>

                        <div className="contact-form-section">
                            <div className="contact-input-holder">
                                <div>
                                    <label htmlFor="contact-first-name" className="text-animate">Nombre</label>
                                </div>
                                <input className="fade-animate" type="text" name='first_name' id='contact-first-name' placeholder='Nombre' required/>
                            </div>
                            <div className="contact-input-holder">
                                <div>
                                    <label htmlFor="contact-last-name" className="text-animate">Apellido</label>
                                </div>
                                <div>
                                    <input className="fade-animate" type="text" name='last_name' id='contact-last-name' placeholder='Apellido'/>
                                </div>
                            </div>
                        </div>
                        <div className="contact-input-holder">
                            <div>
                                <label htmlFor="contact-first-name" className="text-animate">Email</label>
                            </div>
                            <div>
                                <input className="fade-animate" type="email" name='email' id='contact-email' placeholder='ejemplo@dominio.com' required />
                            </div>
                        </div>
                        <div className="contact-input-holder">
                            <div>
                                <label htmlFor="contact-message" className="text-animate">Mensaje</label>
                            </div>
                            <div>
                                <textarea className="fade-animate" name='message' id='contact-message' placeholder='Tu mensaje aquí...' rows={8} required ></textarea>
                            </div>
                        </div>

                        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}/>

                        <button type="submit" className='contact-submit fade-animate'>Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
  );
}
