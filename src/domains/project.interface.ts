
export interface Amenities {
    key: string;
    amount: number
}

export type PropertyType = 'HOUSE' | 'APARTMENT' | 'COMMERCIAL' | 'BUSINESESS';

export interface Project {
    name: string;
    slug: string;
    location: string;
    category: PropertyType;
    description: string
    image: string;
    price: number;
    amenities: Amenities[];
}

export interface ProjectResponse {
    projects: Project[];
}