import type { z } from "zod";
import type { factorFormSchema, interestFormSchema } from "./forms";
import type { UseFormReturn } from "react-hook-form";
import type { factors, interests } from "./constants";

export type TFactorTypeFieldOption = (typeof factors)[number];
export type TInterestTypeFieldOption = (typeof interests)[number];

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

export type TInterestFormSchema = z.infer<typeof interestFormSchema>;
export type TFactorFormSchema = z.infer<typeof factorFormSchema>;

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

export type TFunctionsPerInterestType = Record<
  TInterestTypeFieldOption,
  TInterestFunction
>;

export type TFunctionsPerFactorType = Record<
TFactorTypeFieldOption,
  TFactorFunction
>;

export interface IFactorGivenDataFields {
  label: string;
  key: keyof TFormFieldsSchema; // It can be any key from TFormFieldsSchema. But cannot declare as TFactorTypeFieldOption because of z.infer
}


export interface IInterestGivenDataFields {
  label: string;
  key: keyof TInterestFormFieldsSchema;
}
