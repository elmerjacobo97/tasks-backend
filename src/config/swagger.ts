import swaggerJSDoc from "swagger-jsdoc";

const taskSchema = {
  Task: {
    type: "object",
    properties: {
      id: { type: "integer" },
      title: { type: "string" },
      description: { type: "string" },
      completed: { type: "boolean" },
    },
  },
};

export const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "API documentation for managing tasks",
    },
    components: {
      schemas: taskSchema,
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    basePath: "/api/tasks", // Establece el prefijo de la ruta base
  },
  apis: ["./src/routes/**/*.ts"], // Reemplaza con la ruta a tus archivos de definición de rutas
};

export const specs = swaggerJSDoc(options);
