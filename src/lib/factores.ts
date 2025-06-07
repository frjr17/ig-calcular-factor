export function factorADadoP(interes: number, n: number) {
  return (interes * Math.pow(1 + interes, n)) / (Math.pow(1 + interes, n) - 1);
}

export function factorPDadoA(interes: number, n: number) {
  return (Math.pow(1 + interes, n) - 1) / (interes * Math.pow(1 + interes, n));
}

export function factorADadoF(interes: number, n: number) {
  return interes / (Math.pow(1 + interes, n) - 1);
}

export function factorFDadoA(interes: number, n: number) {
  return (Math.pow(1 + interes, n) - 1) / interes;
}

export function factorFDadoP(interes: number, n: number) {
  return Math.pow(1 + interes, n);
}

export function factorPDadoF(interes: number, n: number) {
  return Math.pow(1 + interes, n * -1);
}

export const factores = {
  "A dado P (A/P)": factorADadoP,
  "P dado A (P/A)": factorPDadoA,
  "P dado F (P/F)": factorPDadoF,
  "F dado P (F/P)": factorFDadoP,
  "F dado A (F/A)": factorFDadoA,
  "A dado F (A/F)": factorADadoF,
};

export const tiposDeFactores = [...Object.keys(factores)] as const;
