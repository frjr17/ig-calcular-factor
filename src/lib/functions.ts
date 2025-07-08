import type { FactorTypes, InterestTypes } from "./forms";

export function factorAGivenP(interest: number, n: number) {
  return (
    (interest * Math.pow(1 + interest, n)) / (Math.pow(1 + interest, n) - 1)
  );
}

export function factorPGivenA(interest: number, n: number) {
  return (
    (Math.pow(1 + interest, n) - 1) / (interest * Math.pow(1 + interest, n))
  );
}

export function factorAGivenF(interest: number, n: number) {
  return interest / (Math.pow(1 + interest, n) - 1);
}

export function factorFGivenA(interest: number, n: number) {
  return (Math.pow(1 + interest, n) - 1) / interest;
}

console.log(factorFGivenA(0.12, 7));

export function factorFGivenP(interest: number, n: number) {
  return Math.pow(1 + interest, n);
}

export function factorPGivenF(interest: number, n: number) {
  return Math.pow(1 + interest, n * -1);
}

export function factorAGivenG(interest: number, n: number) {
  return 1 / interest - n / (Math.pow(1 + interest, n) - 1);
}

export function factorPGivenG(interest: number, n: number) {
  return (
    (Math.pow(1 + interest, n) - interest * n - 1) /
    (Math.pow(interest, 2) * Math.pow(1 + interest, n))
  );
}

export function effectiveInterestRate(nominalInterest: number, m: number) {
  return nominalInterest / m;
}
export function nominalInterestRate(effectiveInterest: number, m: number) {
  return effectiveInterest * m;
}

export function effectiveInterestRateFromNominal(
  nominalOrEffective: number,
  m: number,
  isNominal: boolean = true,
  finalM:number = 0
) {
  const nominalInterest = isNominal
    ? nominalOrEffective
    : nominalInterestRate(nominalOrEffective, m);
  if (finalM > 0) {
    return Math.pow(1 + nominalInterest / m, finalM) - 1;
  }
    return Math.pow(1 + nominalInterest / m, m) - 1;
}

export function nominalInterestRateFromEffective(
  effectiveInterest: number,
  m: number
) {
  return Math.pow(1 + effectiveInterest, 1 / m) - 1;
}

export type InterestFunction = (interest: number, n: number) => number;
export const functionsPerInterest: Record<InterestTypes,InterestFunction> = {
  "Tasa de Interés Nominal (r)": nominalInterestRate,
  "Tasa de Interés Efectiva (i)": effectiveInterestRate,
  "Tasa de Interés Efectiva Anual (ia)": (interest:number,m:number)=>
    effectiveInterestRateFromNominal(interest, m, false),
  "Tasa de Interés Efectiva Anual via Nominal (ia dado r)": (interest:number,m:number)=>
    effectiveInterestRateFromNominal(interest, m, false),
  "Tasa de Interés Efectiva via Efectiva anual (i dado ia)":
    nominalInterestRateFromEffective,
};

export type FactorFunction = (interest: number, n: number) => number;

export const functionsPerFactor: Record<FactorTypes, FactorFunction> = {
  "A dado P (A/P)": factorAGivenP,
  "P dado A (P/A)": factorPGivenA,
  "P dado F (P/F)": factorPGivenF,
  "F dado P (F/P)": factorFGivenP,
  "F dado A (F/A)": factorFGivenA,
  "A dado F (A/F)": factorAGivenF,
  "A dado G (A/G)": factorAGivenG,
  "P dado G (P/G)": factorPGivenG,
};
