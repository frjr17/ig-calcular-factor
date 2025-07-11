import { factorNames, interestNames } from "./constants";
import type {
  TFunctionsPerInterestType,
  TFunctionsPerFactorType,
} from "./types";

function AGivenP(i: number, n: number) {
  return (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
}

function PGivenA(i: number, n: number) {
  return (Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n));
}

function AGivenF(i: number, n: number) {
  return i / (Math.pow(1 + i, n) - 1);
}

function FGivenA(i: number, n: number) {
  return (Math.pow(1 + i, n) - 1) / i;
}

function FGivenP(i: number, n: number) {
  return Math.pow(1 + i, n);
}

function PGivenF(i: number, n: number) {
  return Math.pow(1 + i, n * -1);
}

function AGivenG(i: number, n: number) {
  return 1 / i - n / (Math.pow(1 + i, n) - 1);
}

function PGivenG(i: number, n: number) {
  return (
    (Math.pow(1 + i, n) - i * n - 1) / (Math.pow(i, 2) * Math.pow(1 + i, n))
  );
}

function nominal(effective: number, m: number) {
  return effective * m;
}

function nominalEquation(effective: number, m: number) {
  const draft = !m || !effective;
  const equation = `r = i * m`;

  if (draft) {
    return equation;
  }

  return equation + ` = ${effective} * ${m}`;
}

function effective(nominal: number, m: number) {
  return nominal / m;
}

function effectiveEquation(nominal: number, m: number) {
  const draft = !m || !nominal;
  const equation = `i = \\frac{r}{m}`;

  if (draft) {
    return equation;
  }

  return equation + ` = \\frac{${nominal}}{${m}}`;
}

function effectiveAnnual(effectiveAnnual: number, m: number) {
  return Math.pow(1 + effectiveAnnual, m) - 1;
}

function effectiveAnnualEquation(nominalOrEffective: number, m: number) {
  const draft = !m || !nominalOrEffective;

  const equation = `ia = \\left(1 + i\\right)^m - 1`;

  if (draft) {
    return equation;
  }

  return `${equation} = \\left(1 + ${nominalOrEffective}\\right)^{${m}} - 1`;
}

function effectiveAnnualViaNominal(nominal: number, m: number) {
  return Math.pow(1 + nominal / m, m) - 1;
}

function effectiveAnnualViaNominalEquation(nominal: number, m: number) {
  const draft = !m || !nominal;
  const equation = `ia = \\left(1 + \\frac{r}{m}\\right)^m - 1`;

  if (draft) {
    return equation;
  }

  return `${equation} = \\left(1 + \\frac{${nominal}}{${m}}\\right)^{${m}} - 1`;
}

function effectiveFromEffectiveAnnual(effective: number, m: number) {
  return Math.pow(1 + effective, 1 / m) - 1;
}

function effectiveFromEffectiveAnnualEquation(effective: number, m: number) {
  const draft = !m || !effective;

  if (draft) {
    return `i = (1 + ia)^{\\frac{1}{m}} - 1`;
  }

  return `i = \\left(1 + ia\\right)^{\\frac{1}{m}} - 1 = \\left(1 + ${effective}\\right)^{\\frac{1}{${m}}} - 1`;
}

export const functionsPerInterest: TFunctionsPerInterestType = {
  [interestNames.nominal]: nominal,
  [interestNames.effective]: effective,
  [interestNames.effectiveAnnual]: effectiveAnnual,
  [interestNames.effectiveAnnualViaNominal]: effectiveAnnualViaNominal,
  [interestNames.effectiveViaEffectiveAnnual]: effectiveFromEffectiveAnnual,
};

export const equationsPerInterest: TFunctionsPerInterestType = {
  [interestNames.nominal]: nominalEquation,
  [interestNames.effective]: effectiveEquation,
  [interestNames.effectiveAnnual]: effectiveAnnualEquation,
  [interestNames.effectiveAnnualViaNominal]: effectiveAnnualViaNominalEquation,
  [interestNames.effectiveViaEffectiveAnnual]:
    effectiveFromEffectiveAnnualEquation,
};

export const functionsPerFactor: TFunctionsPerFactorType = {
  [factorNames.aGivenP]: AGivenP,
  [factorNames.pGivenA]: PGivenA,
  [factorNames.aGivenF]: AGivenF,
  [factorNames.fGivenA]: FGivenA,
  [factorNames.fGivenP]: FGivenP,
  [factorNames.pGivenF]: PGivenF,
  [factorNames.aGivenG]: AGivenG,
  [factorNames.pGivenG]: PGivenG,
};
