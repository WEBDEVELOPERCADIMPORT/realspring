import {
    BedDouble,
    Bath,
    SquareEqual,
    Layers,
    CarFront,
    FileQuestion
} from 'lucide-astro';

export const getIconAmenities = (key: string) => {
    const data = {
        beds: { 
            label: {
                es: "Recamaras",
                en: "Beds"
            }, 
            icon: BedDouble 
        },
        bathrooms: { 
            label: {
                es: "Baños",
                en: "Bathrooms"
            }
            , 
            icon: Bath 
        },
        m2: { 
            label: {
                es: "m²",
                en: "m²"
            },
            icon: SquareEqual 
        },
        levels: { 
            label: {
                es: "Niveles",
                en: "Levels"
            }, 
            icon: Layers 
        },
        garages: { 
            label: {
                es: "Garages",
                en: "Garages"
            }, 
            icon: CarFront 
        }
    };

    return data[key as keyof typeof data] || { label: "Unknown", icon: FileQuestion };
};