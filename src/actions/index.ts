import { getProjects } from './projects/getProjects.action';
import { getProject } from './projects/getProject.action';
import { postContactGHL } from './GHL/postContactGHL';

export const server = {
    getProjects,
    getProject,
    postContactGHL
};