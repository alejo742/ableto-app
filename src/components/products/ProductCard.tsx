import React, { useEffect, useState } from "react";
import Link from "next/link";

import './ProductCard.css';

interface ProductCardProps {
    category: Array<string>;
    name: string;
    description: string;
    image: string;
    hyperlink: string;
    index: number;
}

export default function ProductCard( {category, name, description, image, hyperlink, index}: ProductCardProps ) {
    const [alignment, setAlignment] = useState<string>("left");

    useEffect(() => {
        if (index % 2 !== 0) {
            setAlignment("right");
        }
    }, [index]);

    return (
        alignment === "left" ? (
            <div className="product-section left fade-animate">
                <img src={image} alt="AbleTo product image" className="opacity-animate" />
                <div className="card-side">
                    <div className="product-categories fade-animate">
                        {category.map((category, index) => (
                            <h4 key={`${category}-${index}`}>
                                {category}
                            </h4>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-animate">{name}</h2>
                    </div>
                    <div>
                        <p className="text-animate">{description}</p>
                    </div>
                    <Link className="fade-animate" href={hyperlink}>¡Pruébalo!</Link>
                </div>
            </div>
        ) : (
            <div className="product-section right fade-animate">
                <div className="card-side">
                    <div className="product-categories fade-animate">
                        {category.map((category, index) => (
                            <h4 key={`${category}-${index}`}>
                                {category}
                            </h4>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-animate">{name}</h2>
                    </div>
                    <div>
                        <p className="text-animate">{description}</p>
                    </div>
                    <Link className="fade-animate" href={hyperlink}>¡Pruébalo!</Link>
                </div>
                <img src={image} alt="AbleTo product image" className="opacity-animate" />
            </div>
        )
    );
}