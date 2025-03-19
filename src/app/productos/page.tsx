"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import './products.css';

import AnimationsRepository from "@repositories/animations.repository";
import Preloader from "@components/shared/Preloader";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProductCard from "@components/products/ProductCard";
import { productHashes } from "@services/products/productData";

export default function Productos() {

    useEffect(() => {
        AnimationsRepository.initialSetup();
    }, []);

    return (
        <body>
            <Preloader />
            <div className="products-wrapper general-wrapper">
                <Navbar />

                <main>
                    {productHashes.map((productHash, index) => (
                        <ProductCard
                            key={productHash.name + index} // Add a unique key here
                            category={productHash.categories}
                            name={productHash.name}
                            description={productHash.description}
                            image={productHash.image}
                            hyperlink={productHash.hyperlink}
                            index={index}
                        ></ProductCard>
                    ))}
                </main>

                <Footer />
            </div>
        </body>
    );
}