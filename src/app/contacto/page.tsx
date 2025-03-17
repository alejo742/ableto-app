"use client";

import React from "react";
import Link from "next/link";
import "./contacto.css";
import Navbar from "@/components/shared/Navbar";

export default function Contacto() {
  return (
    <div className="general-wrapper">
        <Navbar />
        <div className="contact-wrapper">
            <div className="contact-graphics"></div>
            <div className="contact-container">
                <Link href="/">
                    <img src="/images/ableto-transparent.png" alt="Logo AbleTo" />
                </Link>
                <div className="contact-heading">
                    <h1>Contáctanos</h1>
                    <p>Usa este formulario para contactarte con el equipo detrás de AbleTo. ¡Estaremos felices de ayudarte!</p>
                </div>
                <form action="https://api.web3forms.com/submit" method='POST' className="contact-form">

                    <input type="hidden" name="access_key" value="f4df650b-9eff-457b-85b4-9deaeb605cc6"/>
                    <input type="hidden" name="from_name" value="Contacto Info AbleTo"></input>

                    <div className="contact-form-section">
                        <div className="contact-input-holder">
                            <label htmlFor="contact-first-name">Nombre</label>
                            <input type="text" name='first_name' id='contact-first-name' placeholder='Nombre' required/>
                        </div>
                        <div className="contact-input-holder">
                            <label htmlFor="contact-last-name">Apellido</label>
                            <input type="text" name='last_name' id='contact-last-name' placeholder='Apellido'/>
                        </div>
                    </div>
                    <div className="contact-input-holder">
                        <label htmlFor="contact-first-name">Email</label>
                        <input type="email" name='email' id='contact-email' placeholder='ejemplo@dominio.com' required />
                    </div>
                    <div className="contact-input-holder">
                        <label htmlFor="contact-message">Mensaje</label>
                        <textarea name='message' id='contact-message' placeholder='Tu mensaje aquí...' rows={8} required ></textarea>
                    </div>

                    <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}/>

                    <button type="submit" className='contact-submit'>Enviar mensaje</button>
                </form>
            </div>
        </div>
    </div>
  );
}