import type { FactorTypes } from "./forms";

export function factorAGivenP(interest: number, n: number) {
  return (interest * Math.pow(1 + interest, n)) / (Math.pow(1 + interest, n) - 1);
}

export function factorPGivenA(interest: number, n: number) {
  return (Math.pow(1 + interest, n) - 1) / (interest * Math.pow(1 + interest, n));
}

export function factorAGivenF(interest: number, n: number) {
  return interest / (Math.pow(1 + interest, n) - 1);
}

export function factorFGivenA(interest: number, n: number) {
  return (Math.pow(1 + interest, n) - 1) / interest;
}

console.log(factorFGivenA(0.12,7))

export function factorFGivenP(interest: number, n: number) {
  return Math.pow(1 + interest, n);
}

export function factorPGivenF(interest: number, n: number) {
  return Math.pow(1 + interest, n * -1);
}

export function factorAGivenG(interest: number, n: number) {
  return (1 / interest) - (n / (Math.pow(1 + interest, n) - 1));
}

export function factorPGivenG(interest: number, n: number) {
  return ((Math.pow(1 + interest, n) - interest * n - 1) / (Math.pow(interest, 2) * Math.pow(1 + interest, n)));
}




export type FactorFunction = (interest:number,n:number) => number

export const functionsPerFactor: Record<FactorTypes,FactorFunction> = {
  "A dado P (A/P)": factorAGivenP,
  "P dado A (P/A)": factorPGivenA,
  "P dado F (P/F)": factorPGivenF,
  "F dado P (F/P)": factorFGivenP,
  "F dado A (F/A)": factorFGivenA,
  "A dado F (A/F)": factorAGivenF,
  "A dado G (A/G)": factorAGivenG,
  "P dado G (P/G)": factorPGivenG,
};

