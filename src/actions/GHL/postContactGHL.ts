import { z } from "astro:schema";
import { defineAction } from "astro:actions";

export const postContactGHL = defineAction({
    accept: 'form',
    input: z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string()
    }),
    handler: async (input) => {
        const { name, email, message } = input;

        const firstName = name
        const GHL_TOKEN = import.meta.env.GHL_TOKEN;
        const LOCATION_ID = import.meta.env.GHL_LOCATION_ID;
        const MESSAGE_FIELD_ID = import.meta.env.GHL_MESSAGE_FIELD_ID;
        const TAG = import.meta.env.GHL_TAG;

        try {
            const response = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${GHL_TOKEN}`,
                    "version": "2021-07-28",
                    "Content-Type": "application/json",
                    "locationId": LOCATION_ID
                },
                body: JSON.stringify({
                    firstName,
                    lastName: "",
                    name: firstName,
                    email,
                    locationId: LOCATION_ID,
                    customFields: [
                        {
                            id: MESSAGE_FIELD_ID,
                            value: message
                        }
                    ],
                    tags: [TAG]
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('GHL Error Response:', data);
                throw new Error(data.message || 'Error connected with HighLevel');
            }

            return {
                success: true,
                data: data
            };

        } catch (error: any) {
            console.error('GHL Catch Error:', error.message);
            throw new Error(error.message || 'Error to connected with HighLevel');
        }
    } 
});