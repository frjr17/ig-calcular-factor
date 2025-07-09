import type { factorTypes, interestTypes } from "./forms";

export type TFactorTypes = (typeof factorTypes)[number];
export type TInterestTypes = (typeof interestTypes)[number];

export type TFactorFunction = (interest: number, n: number) => number;
export type TInterestFunction = (interest: number, n: number) => number | string;

export type TFormSchema = {
  type: TFactorTypes;
  interest: number;
  periods: number;
  given?: number;
};

export type TInterestFormSchema = {
  type: TInterestTypes;
  interest: number;
  periods: number;
};

