import type { IFactorGivenDataFields, IInterestGivenDataFields } from "./types";

export const factorNames = {
  aGivenP: "A dado P (A/P)",
  pGivenA: "P dado A (P/A)",
  pGivenF: "P dado F (P/F)",
  fGivenP: "F dado P (F/P)",
  fGivenA: "F dado A (F/A)",
  aGivenF: "A dado F (A/F)",
  aGivenG: "A dado G (A/G)",
  pGivenG: "P dado G (P/G)",
};

export const factors = [
  factorNames.aGivenP,
  factorNames.pGivenA,
  factorNames.pGivenF,
  factorNames.fGivenP,
  factorNames.fGivenA,
  factorNames.aGivenF,
  factorNames.aGivenG,
  factorNames.pGivenG,
] as const;

export const interestNames = {
  nominal: "Tasa de Interés Nominal (r)",
  effective: "Tasa de Interés Efectiva (i)",
  effectiveAnnual: "Tasa de Interés Efectiva Anual (ia)",
  effectiveAnnualViaNominal:
    "Tasa de Interés Efectiva Anual via Nominal (ia dado r)",
  effectiveViaEffectiveAnnual:
    "Tasa de Interés Efectiva via Efectiva anual (i dado ia)",
};

export const interests = [
  interestNames.nominal,
  interestNames.effective,
  interestNames.effectiveAnnual,
  interestNames.effectiveAnnualViaNominal,
  interestNames.effectiveViaEffectiveAnnual,
] as const;

export const factorGivenDataFields: IFactorGivenDataFields[] = [
  {
    label: "Tipo de Factor",
    key: "type",
  },
  {
    label: "Interés",
    key: "interest",
  },
  {
    label: "Periodos",
    key: "periods",
  },
  {
    label: "Valor Dado",
    key: "given",
  },
];

export const interestGivenDataFields: IInterestGivenDataFields[] = [
  {
    label: "Tipo de Interés",
    key: "type",
  },
  {
    label: "Interés",
    key: "interest",
  },

  {
    label: "Periodos",
    key: "periods",
  },
];
