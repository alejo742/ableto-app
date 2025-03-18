"use client";

import React from "react";
import Link from "next/link";
import './products.css';

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProductCard from "@components/products/ProductCard";
import { productHashes } from "@services/products/productData";

export default function Productos() {
    return (
        <div className="products-wrapper">
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
    );
}