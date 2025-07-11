"use client";
import InterestForm from "@/components/InterestForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { interestGivenDataFields } from "@/lib/constants";
import { equationsPerInterest, functionsPerInterest } from "@/lib/functions";
import type { TInterestFormFieldsSchema } from "@/lib/types";
import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";

interface IInterestGivenDataProps {
  data: Partial<TInterestFormFieldsSchema>;
}


function InterestGivenData(props: IInterestGivenDataProps) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Datos</h1>
      {interestGivenDataFields.map((field) => (
        <div key={field.key}>
          <strong>{field.label}: </strong>
          <span>{props.data[field.key] || "No dado"}</span>
        </div>
      ))}
    </section>
  );
}

interface IInterestDeclarationAndCalcProps {
  data: Partial<TInterestFormFieldsSchema>;
  result?: number | string;
}

function InterestDeclarationAndCalc(props: IInterestDeclarationAndCalcProps) {
  const { interest, periods, type } = props.data;

  const declaration =
    equationsPerInterest[type!](interest! / 100, periods!) +
    " = " +
    props.result;

  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Declaración & Cálculo</h1>
      <code className="space-y-3">
        <div>
          <BlockMath>{declaration}</BlockMath>
        </div>
      </code>
    </section>
  );
}

interface IInterestResultsProps {
  data: Partial<TInterestFormFieldsSchema>;
  result?: number | string;
}

function InterestResults(props: IInterestResultsProps) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Resultados</h1>
      <div className="">
        <strong>La {props.data.type} es: </strong>
        <span>{props.result}%</span>
      </div>
    </section>
  );
}

export default function InterestCalculator() {
  const [data, setData] = useState<Partial<TInterestFormFieldsSchema>>({});
  const [result, setResult] = useState<number | string>();

  const handleSubmit = (newData: TInterestFormFieldsSchema) => {
    setData(newData);
  };

  useEffect(() => {
    if (data.type) {
      const interest = data.interest! / 100;

      const newInterest =
        (functionsPerInterest[data.type](interest, data.periods!) as number) *
        100;

      setResult(newInterest.toFixed(5));
    }
  }, [data]);

  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-10">
      <div className="flex flex-col justify-center items-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Ingresa tus datos</CardTitle>
          </CardHeader>
          <CardContent>
            <InterestForm handleSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
      {data.type && (
        <div className="flex flex-col justify-center text-center md:text-left">
          <InterestGivenData data={data} />
          <InterestDeclarationAndCalc data={data} result={result} />
          {result && <InterestResults data={data} result={result} />}
        </div>
      )}
    </div>
  );
}
