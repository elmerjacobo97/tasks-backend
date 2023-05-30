import { Router } from "express";
import { executeSeed } from "../controllers";

const router = Router();

/**
 * @swagger
 * /api/seed:
 *   get:
 *     summary: Ejecutar semilla de datos
 *     description: Ejecuta la semilla de datos para crear tareas predefinidas en la base de datos.
 *     responses:
 *       200:
 *         description: Semilla ejecutada correctamente
 *       500:
 *         description: Error al ejecutar la semilla
 */
router.get("/seed", executeSeed);

export default router;
