import { z } from "zod";
import type { IFormField } from "./types";
import { factors, interests } from "./constants";



export const interestFormSchema = z.object({
  type: z.enum(interests, {
    message: "Es necesario un tipo de interés.",
  }),
  interest: z.coerce.number().min(0, {
    message: "Ingresa el porcentaje de interés.",
  }),
  periods: z.coerce.number().min(1, {
    message: "Ingresa el número de periodos.",
  }),
});

export const interestFormFields: IFormField[] = [
  {
    name: "type",
    label: "Tipo de Interés",
    placeholder: "e.g. Tasa de Interés Nominal (r)",
    type: "select",
    description: "Selecciona el tipo de interés que deseas calcular.",
    options: interests,
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
    label: "Periodos (m)",
    placeholder: "e.g. 1, 2, 3...",
    type: "number",
    description: "Ingresa el número de periodos.",
  },
];

export const factorFormSchema = z.object({
  type: z.enum(factors, {
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

export const factorFormFields: IFormField[] = [
  {
    name: "type",
    label: "Tipo de Factor",
    placeholder: "e.g. A dado P (A/P), P dado A (P/A)...",
    type: "select",
    description: "Selecciona el tipo de interés que deseas calcular.",
    options: factors,
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