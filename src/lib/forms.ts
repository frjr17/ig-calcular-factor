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
] as const;

export const interestTypes = [
  "Tasa de Interés Nominal (r)",
  "Tasa de Interés Efectiva (i)",
  "Tasa de Interés Efectiva Anual (ia)",
  "Tasa de Interés Efectiva Anual via Nominal (ia dado r)",
  "Tasa de Interés Efectiva via Efectiva anual (i dado ia)",
] as const;

export type FactorTypes = (typeof factorTypes)[number];
export type InterestTypes = (typeof interestTypes)[number];
export type FormSchema = {
  type: FactorTypes;
  interest: number;
  periods: number;
  given?: number;
};

export type InterestFormSchema = {
  type: InterestTypes;
  interest: number;
  periods: number;
};

export const interestFormSchema = z.object({
  type: z.enum(interestTypes, {
    message: "Es necesario un tipo de interés.",
  }),
  interest: z.coerce.number().min(0, {
    message: "Ingresa el porcentaje de interés.",
  }),
  periods: z.coerce.number().min(1, {
    message: "Ingresa el número de periodos.",
  }),
});

export const formSchema = z.object({
  type: z.enum(factorTypes, {
    message: "Es necesario un tipo de factor.",
  }),
  interest: z.coerce.number().min(1, {
    message: "Ingresa el porcentaje de interés.",
  }),
  periods: z.coerce.number().min(1, {
    message: "Ingresa el número de periodos.",
  }),
  given: z.coerce.number(),
});
