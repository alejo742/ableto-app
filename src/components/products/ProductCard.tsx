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
            <div className="product-section left">
                <img src={image} alt="AbleTo product image" />
                <div className="card-side">
                    <div className="product-categories">
                        {category.map((category, index) => (
                            <h4 key={`${category}-${index}`}>
                                {category}
                            </h4>
                        ))}
                    </div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link href={hyperlink}>¡Pruébalo!</Link>
                </div>
            </div>
        ) : (
            <div className="product-section right">
                <div className="card-side">
                    <div className="product-categories">
                        {category.map((category, index) => (
                            <h4 key={`${category}-${index}`}>
                                {category}
                            </h4>
                        ))}
                    </div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link href={hyperlink}>¡Pruébalo!</Link>
                </div>
                <img src={image} alt="AbleTo product image" />
            </div>
        )
    );
}