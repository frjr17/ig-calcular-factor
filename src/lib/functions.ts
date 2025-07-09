import type {
  TFactorFunction,
  TInterestFunction,
  TFactorTypeFieldOption,
  TInterestTypeFieldOption,
} from "./types";


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

export function effectiveInterestRateEquation(
  nominalInterest: number,
  m: number
) {
  const draft = !m || !nominalInterest;
  const equation = `i = \\frac{r}{m}`;
  if (draft) {
    return equation;
  }
  return equation + ` = \\frac{${nominalInterest}}{${m}}`;
}

export function nominalInterestRate(effectiveInterest: number, m: number) {
  return effectiveInterest * m;
}

export function nominalInterestRateEquation(
  effectiveInterest: number,
  m: number
) {
  const draft = !m || !effectiveInterest;
  const equation = `r = i * m`;
  if (draft) {
    return equation;
  }
  return equation + ` = ${effectiveInterest} * ${m}`;
}

export function effectiveInterestRateFromNominal(
  nominalOrEffective: number,
  m: number,
  isNominal: boolean = false
) {
  const nominalInterest = isNominal
    ? nominalOrEffective
    : nominalInterestRate(nominalOrEffective, m);
  return Math.pow(1 + nominalInterest / m, m) - 1;
}

export function effectiveInterestRateFromNominalEquation(
  nominalOrEffective: number,
  m: number,
  isNominal: boolean = false
) {
  const draft = !m || !nominalOrEffective;
  let equation;

  if (isNominal) {
    equation = `ia = \\left(1 + \\frac{r}{m}\\right)^m - 1`;
  } else {
    equation = `ia = \\left(1 + i\\right)^m - 1`;
  }

  if (draft) {
    return equation;
  }

  if (isNominal) {
    return `${equation} = \\left(1 + \\frac{${nominalOrEffective}}{${m}}\\right)^{${m}} - 1`;
  } else {
    return `${equation} = \\left(1 + ${nominalOrEffective}\\right)^{${m}} - 1`;
  }
}

export function nominalInterestRateFromEffective(
  effectiveInterest: number,
  m: number
) {
  return Math.pow(1 + effectiveInterest, 1 / m) - 1;
}

export function nominalInterestRateFromEffectiveEquation(
  effectiveInterest: number,
  m: number
) {
  const draft = !m || !effectiveInterest;
  if (draft) {
    return `i = (1 + ia)^{\\frac{1}{m}} - 1`;
  }
  return `i = \\left(1 + ia\\right)^{\\frac{1}{m}} - 1 = \\left(1 + ${effectiveInterest}\\right)^{\\frac{1}{${m}}} - 1`;
}

export const functionsPerInterest: Record<TInterestTypeFieldOption, TInterestFunction> = {
  "Tasa de Interés Nominal (r)": nominalInterestRate,
  "Tasa de Interés Efectiva (i)": effectiveInterestRate,
  "Tasa de Interés Efectiva Anual (ia)": (interest: number, m: number) =>
    effectiveInterestRateFromNominal(interest, m, false),
  "Tasa de Interés Efectiva Anual via Nominal (ia dado r)": (
    interest: number,
    m: number
  ) => effectiveInterestRateFromNominal(interest, m, true),
  "Tasa de Interés Efectiva via Efectiva anual (i dado ia)":
    nominalInterestRateFromEffective,
};

export const equationsPerInterest: Record<TInterestTypeFieldOption, TInterestFunction> = {
  "Tasa de Interés Nominal (r)": nominalInterestRateEquation,
  "Tasa de Interés Efectiva (i)": effectiveInterestRateEquation,
  "Tasa de Interés Efectiva Anual (ia)":
    effectiveInterestRateFromNominalEquation,
  "Tasa de Interés Efectiva Anual via Nominal (ia dado r)": (
    interest: number,
    m: number
  ) => effectiveInterestRateFromNominalEquation(interest, m, true),
  "Tasa de Interés Efectiva via Efectiva anual (i dado ia)":
    nominalInterestRateFromEffectiveEquation,
};

export const functionsPerFactor: Record<TFactorTypeFieldOption, TFactorFunction> = {
  "A dado P (A/P)": factorAGivenP,
  "P dado A (P/A)": factorPGivenA,
  "P dado F (P/F)": factorPGivenF,
  "F dado P (F/P)": factorFGivenP,
  "F dado A (F/A)": factorFGivenA,
  "A dado F (A/F)": factorAGivenF,
  "A dado G (A/G)": factorAGivenG,
  "P dado G (P/G)": factorPGivenG,
};
