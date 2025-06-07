import { z } from "zod";

export const formSchema = z.object({
  tipoDeFactor: z.string().min(1,{
    message: "Es necesario un tipo de factor.",
  }),
  interes: z.coerce.number().min(1,{
    message: "Ingresa el porcentaje de interés.",
  }),
  periodos: z.coerce.number().min(1,{
    message: "Ingresa el número de periodos.",
  }),
  dado: z.coerce.number(),
});
