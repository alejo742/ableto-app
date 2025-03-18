interface ProductHash {
    categories: Array<string>;
    name: string;
    description: string;
    image: string;
    hyperlink: string;
}

/**
 * Array of product hashes. Modify this array to add or remove products from the products page.
 */
export const productHashes: Array<ProductHash> = [
    {
        categories: ["Software", "Braille"],
        name: "DotSense",
        description: "DotSense es un programa que permite aprendizaje autónomo de Braille mediante tecnología táctil y reconocimiento de voz. Ideal para centros educativos, rehabilitación visual y uso personal, DotSense combina hardware USB de bajo consumo con software intuitivo, ofreciendo una experiencia educativa accesible para todas las edades.",
        image: "/images/products/dotsense.png",
        hyperlink: "https://drive.google.com/file/d/1mkk6OmMXN3GiWVZOc_LWY3ueZZkakBpW/view?usp=sharing"
    },
    {
        categories: ["AI", "Software", "Salud"],
        name: "(Proyecto en desarrollo)",
        description: "Un sistema de inteligencia artificial diseñado para detectar tumores cerebrales basándose en imágenes de resonancia magnética (MRI). Este proyecto tiene como objetivo ayudar a los profesionales médicos a identificar tumores de manera más rápida y precisa, mejorando los resultados del diagnóstico y tratamiento.",
        image: "/images/products/crosst.jpg",
        hyperlink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]