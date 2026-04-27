import { defineAction } from "astro:actions"
import projects from '../../data/projects.json'
import { z } from "astro:schema"
import type { Project } from "../../domains/project.interface"



export const  getProjects = defineAction({
    input: z.object({
        category: z.string(),
        filter: z.string(),
        lang: z.string()
    }),
    handler: async (input): Promise<{message: string, data: Project[]}> => {

        const { category, filter = "" } = input;

        const searchTerm = (filter || "").toLowerCase().trim()
        const selectedCategory = category.toLowerCase();

        const filtered = projects.projects.filter(p => {
            const matchesCategory = selectedCategory === "all" || p.type.toLowerCase() === selectedCategory;
            const matchesFilter = searchTerm === "" || 
                p.name.toLowerCase().includes(searchTerm) || 
                p.location.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesFilter;
        });
        return {
            message: "get projects success",
            data: filtered as Project[]
        }
    }
})
