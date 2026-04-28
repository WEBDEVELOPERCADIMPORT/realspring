import { defineAction } from "astro:actions"
import projects from '../../data/projects.json'
import { z } from "astro:schema"
import type { Project } from "../../domains/project.interface"



export const  getProjects = defineAction({
    input: z.object({
        category: z.string().optional(),
        filter: z.string().optional(),
        actualId: z.string().optional(),
        limit: z.number().optional(),
        lang: z.string()
    }),
    handler: async (input): Promise<{message: string, data: Project[]}> => {

        const { category = "all", filter = "", limit = null, actualId = null } = input;

        const searchTerm = (filter || "").toLowerCase().trim()
        const selectedCategory = category?.toLowerCase();

        const filtered = projects.projects.filter(p => {
            const matchesCategory = selectedCategory === "all" || p.category.toLowerCase() === selectedCategory;
            const matchesFilter = searchTerm === "" || 
                p.name.toLowerCase().includes(searchTerm) || 
                p.location.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesFilter;
        });

        const notId = filtered.filter( p => p.slug !== actualId)

        const data = limit ? notId.slice(0,limit) : filtered
        return {
            message: "get projects success",
            data: data as Project[]
        }
    }
})