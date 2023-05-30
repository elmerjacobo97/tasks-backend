// Define los datos de la semilla
import { TaskData } from "../interfaces";

export const seedData: TaskData[] = [
  {
    title: "Completar informe de ventas",
    description:
      "Revisar los datos de ventas del mes y completar el informe correspondiente.",
    completed: false,
  },
  {
    title: "Enviar correos de seguimiento",
    description:
      "Enviar correos de seguimiento a los clientes potenciales que se contactaron la semana pasada.",
    completed: false,
  },
  {
    title: "Reunión de equipo",
    description:
      "Asistir a la reunión de equipo para discutir los avances del proyecto actual.",
    completed: false,
  },
  {
    title: "Actualizar el sitio web",
    description:
      "Actualizar el contenido y el diseño del sitio web de la empresa con la nueva información.",
    completed: true,
  },
  {
    title: "Preparar presentación",
    description:
      "Preparar la presentación para la próxima reunión con los inversores.",
    completed: true,
  },
];
