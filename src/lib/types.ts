import type { z } from "zod";
import type {
  factorFormSchema,
  factorTypes,
  interestFormSchema,
  interestTypes,
} from "./forms";
import type { UseFormReturn } from "react-hook-form";

export type TFactorTypeFieldOption = (typeof factorTypes)[number];
export type TInterestTypeFieldOption = (typeof interestTypes)[number];

export type TFactorFunction = (i: number, n: number) => number;
export type TInterestFunction = (i: number, n: number) => number | string;

export type TFormFieldsSchema = {
  type: TFactorTypeFieldOption;
  interest: number;
  periods: number;
  given?: number;
};

export type TInterestFormFieldsSchema = {
  type: TInterestTypeFieldOption;
  interest: number;
  periods: number;
};

export type TFactorFormSchema = z.infer<typeof factorFormSchema>;
export type TInterestFormSchema = z.infer<typeof interestFormSchema>;

export type TFormType = TFactorFormSchema | TInterestFormSchema;

export type TUseFormType = UseFormReturn<
  TFactorFormSchema | TInterestFormSchema
>;

export interface IFormField {
  name: TFormTypeFieldType;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
  options?: readonly string[] | string[];
}

export type TFormTypeFieldType =
  | keyof typeof factorFormSchema._type
  | keyof typeof interestFormSchema._type;
