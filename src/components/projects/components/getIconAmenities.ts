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
            label: "Beds", 
            icon: BedDouble 
        },
        bathrooms: { 
            label: "Bathrooms", 
            icon: Bath 
        },
        m2: { 
            label: "m²", 
            icon: SquareEqual 
        },
        levels: { 
            label: "Levels", 
            icon: Layers 
        },
        garages: { 
            label: "Garages", 
            icon: CarFront 
        }
    };

    return data[key as keyof typeof data] || { label: "Unknown", icon: FileQuestion };
};