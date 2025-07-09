"use client";
import InterestForm from "@/components/InterestForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { functionsPerInterest } from "@/lib/functions";
import type { TInterestFormSchema } from "@/lib/types";
import { useEffect, useState } from "react";

interface IInterestGivenDataProps {
  data: Partial<TInterestFormSchema>;
}

function InterestGivenData(props: IInterestGivenDataProps) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Datos</h1>
      <div className="">
        <strong>Tipo de Interés: </strong>
        <span>{props.data.type}</span>
      </div>
      <div className="">
        <strong>Interés: </strong>
        <span>{props.data.interest}%</span>
      </div>
      <div className="">
        <strong>Periodos: </strong>
        <span>{props.data.periods} periodos</span>
      </div>
    </section>
  );
}

interface IInterestResultsProps {
  data: Partial<TInterestFormSchema>;
  result?: number | string;
}

function InterestResults(props: IInterestResultsProps) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Resultados</h1>
      <div className="">
        <strong>La respuesta para {props.data.type} es: </strong>
        <span>{props.result}%</span>
      </div>
    </section>
  );
}

export default function InterestCalculator() {
  const [data, setData] = useState<Partial<TInterestFormSchema>>({});
  const [result, setResult] = useState<number | string>();

  const handleSubmit = (newData: TInterestFormSchema) => {
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
      <div className="flex flex-col justify-center text-center md:text-left">
        {data.type && <InterestGivenData data={data} />}
        {result && <InterestResults data={data} result={result} />}
      </div>
    </div>
  );
}
