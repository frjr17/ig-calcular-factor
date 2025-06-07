import { z } from "zod";

export const formSchema = z.object({
  tipoDeFactor: z.string({
    message: "Es necesario un tipo de factor.",
  }),
  interes: z.number({
    message: "Ingresa el porcentaje de interés.",
  }),
  periodos: z.number({
    message: "Ingresa el número de periodos.",
  }),
  dado: z.number(),
});
