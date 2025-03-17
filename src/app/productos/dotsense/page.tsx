"use client";

import React from "react";
import Link from "next/link";
import './dotsense.css';
import Navbar from "@/components/shared/Navbar";

export default function DotSense() {
    return (
        <main>
            <div className="product-text">
                <h1>
                    Dot
                    <br></br>
                    Sense.
                </h1>
                <button className="download-button">Descárgalo ahora</button>
            </div>
        </main>
    );
}