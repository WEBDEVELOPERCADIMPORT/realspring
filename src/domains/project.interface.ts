
export interface Amenities {
    beds: number;
    bathrooms: number;
    m2: number;
    levels: number;
    garages: number;
}

export type PropertyType = 'HOUSE' | 'PENTHOUSE' | 'APARTMENT' | 'LOFT';

export interface Project {
    name: string;
    location: string;
    type: PropertyType;
    image: string;
    price: number;
    amenities: Amenities[];
}

export interface ProjectResponse {
    projects: Project[];
}