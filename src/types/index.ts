import type { ReactElement } from 'react';

export interface ServiceItem {
    id: string;
    title: string;
    desc: string;
    icon: ReactElement;
}

export interface PortfolioItem {
    id: number;
    title: string;
    cat: string;
    img: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface ProjectChallenge {
    title: string;
    description: string;
}

export interface ProjectMaterials {
    paper: string;
    size: string;
    method: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    client: string;
    date: string;
    heroImg: string;
    description: string;
    gallery: string[];
    services: string[];
    materials: ProjectMaterials;
    challenges: ProjectChallenge[];
    tags: string[];
    rating: number;
}
