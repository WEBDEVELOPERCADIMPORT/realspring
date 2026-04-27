import { defineAction } from 'astro:actions';
import { getProjects } from './projects/project.action';

export const server = {
    getProjects
};