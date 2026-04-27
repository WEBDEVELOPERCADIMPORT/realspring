import { defineAction } from "astro:actions"
import projects from '../../data/projects.json'
import { z } from "astro:schema"
import type { Project } from "../../domains/project.interface"




export const  getProjects = defineAction({
    input: z.object({
        category: z.string(),
        lang: z.string()
    }),
    handler: async (input): Promise<{message: string, data: Project[]}> => {

        const { category } = input;

        const filtered = projects.projects.filter(p => 
            category === "all" || p.type === category
        );

        return {
            message: "get projects success",
            data: filtered as Project[]
        }
    }
})
