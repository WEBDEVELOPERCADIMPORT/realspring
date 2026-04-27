import { defineAction } from "astro:actions"
import projects from '../../data/projets.json'
import type { Project } from "../../domains/project.interface"




export const  getProjects = defineAction({
    handler: async (input): Promise<{message: string, data: Project[]}> => {
        return {
            message: "get projects success",
            data: projects.projects as Project[]
        }
    }
})
