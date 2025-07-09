import { z } from "zod";
import type { IFormField } from "./types";

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

export const factorFormFields: IFormField[] = [
  {
    name: "type",
    label: "Tipo de Factor",
    placeholder: "e.g. A dado P (A/P), P dado A (P/A)...",
    type: "select",
    description: "Selecciona el tipo de interés que deseas calcular.",
    options: factorTypes,
  },
  {
    name: "interest",
    label: "Interés (%)",
    placeholder: "e.g. 10, 25, 100",
    type: "number",
    description: "Ingresa el porcentaje de interés.",
  },
  {
    name: "periods",
    label: "Periodos (n)",
    placeholder: "e.g. 1, 2, 3...",
    type: "number",
    description: "Ingresa el número de periodos.",
  },
  {
    name: "given",
    label: "Valor dado (Opcional)",
    placeholder: "e.g. 1000, 5000, 10000",
    type: "number",
    description: "Ingresa el valor dado (opcional).",
  },
];

export const factorFormSchema = z.object({
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

