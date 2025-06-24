import { z } from "zod";


export const factorTypes = [
  "A dado P (A/P)",
  "P dado A (P/A)",
  "P dado F (P/F)",
  "F dado P (F/P)",
  "F dado A (F/A)",
  "A dado F (A/F)",
  "A dado G (A/G)",
  "P dado G (P/G)",
] as const



export type FactorTypes = typeof factorTypes[number];

export type FormSchema = {
  type: FactorTypes;
  interest:number;
  periods:number;
  given?:number;
}

export const formSchema = z.object({
  type: z.enum(factorTypes,{
    message: "Es necesario un tipo de factor.",
  }),
  interest: z.coerce.number().min(1,{
    message: "Ingresa el porcentaje de interés.",
  }),
  periods: z.coerce.number().min(1,{
    message: "Ingresa el número de periodos.",
  }),
  given: z.coerce.number(),
});
