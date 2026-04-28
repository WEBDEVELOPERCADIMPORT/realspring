import { defineAction } from "astro:actions"
import projects from '../../data/projects.json'
import { z } from "astro:schema"
import type { Project } from "../../domains/project.interface"



export const  getProject = defineAction({
    input: z.object({
        id: z.string(),
        lang: z.string()
    }),
    handler: async (input): Promise<{message: string, data: Project | null}> => {

        const { id } = input;

        const projectFound = projects.projects.find( p => p.slug == id )

        if (!projectFound) {
            return {
            message: "get project success",
            data: null
        }
        }
        return {
            message: "get project success",
            data: projectFound as Project
        }
    }
})
