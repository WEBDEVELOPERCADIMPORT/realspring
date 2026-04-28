export const ui = {
    es: {
        footer: {
            rights: '® Todos los derechos reservados.',
        },
        contact: {
                title: "¿Tiene alguna pregunta?",
                subtitle: "Escríbanos para recibir información",
                form: {
                    inputs: {
                        name: "Primer Nombre",
                        email: "Correo Electrónico",
                        description: "Escríbenos tu mensaje"
                    },
                    buttonAccion: "ENVIAR SOLICITUD"
                }
            }
    },
    en: {
        footer: {
            rights: '® All rights reserved.',
        },
        contact: {
                title: "Do you have any questions?",
                subtitle: "Write to us to receive information",
                form:{
                    inputs:{
                        name: "First Name",
                        email: "Email",
                        description: "We write"
                    },
                    buttonAccion: "SUBMIT REQUEST"
                }
            }
    },
} as const;