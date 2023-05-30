# API de Tareas

Esta es una API para gestionar tareas.

## Requisitos previos

- Node.js (>=14.0)
- npm (>=6.0)
- Base de datos MySQL (>=8.0)

## Instalación

1. Clona este repositorio: `git clone https://github.com/elmerjacobo97/tasks-backend`
2. Ve al directorio del proyecto: `cd tu-repositorio`
3. Instala las dependencias: `npm install`

## Configuración de la base de datos

1. Crea una base de datos MySQL llamada `tasks`.
2. Actualiza la configuración de la base de datos en el archivo `.env`.

## Uso
1. Inicia el servidor de typescript: `npm run build`
2. Inicia el servidor: `npm run dev`
3. Accede a la API en: `http://localhost:3000/api/tasks`
4. LLamar el seed de prueba: `http://localhost:3000/api/seed`
5. Acceder a la documentación: `http://localhost:3000/api-docs`

## Endpoints

`GET /api/tasks` o `/api/tasks?page=0&pageSize=2` Obtener todas las tareas y paginación
`POST /api/tasks` Crear una tarea
`GET /api/tasks/count` Obtener el total de tareas
`GET /api/tasks/:id` Obtener una tarea por ID o title
`PUT /api/tasks/:id` Actualizar una tarea
`DELETE /api/tasks/:id` Eliminar una tarea

## Contribuciones

¡Contribuciones bienvenidas! Si deseas mejorar este proyecto, por favor envía un pull request.
