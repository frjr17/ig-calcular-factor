"use client";
import InterestForm from "@/components/InterestForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { InterestFormSchema } from "@/lib/forms";
import {
  functionsPerInterest,
} from "@/lib/functions";
import { useEffect, useState } from "react";

export default function InterestCalculator() {
  const [data, setData] = useState<Partial<InterestFormSchema>>({});
  const [result, setResult] = useState<number | string>();

  const handleSubmit = (newData: InterestFormSchema) => {
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
        <section className="my-5 space-y-3">
          <h1 className="text-3xl font-bold">Datos</h1>
          <div className="">
            <strong>Tipo de Interés: </strong>
            <span>{data.type}</span>
          </div>
          <div className="">
            <strong>Interés: </strong>
            <span>{data.interest}%</span>
          </div>
          <div className="">
            <strong>Periodos: </strong>
            <span>{data.periods} periodos</span>
          </div>
        </section>
        <section className="my-5 space-y-3">
          <h1 className="text-3xl font-bold">Resultados</h1>
          <div className="">
            <strong>La respuesta para {data.type} es: </strong>
            <span>{result}%</span>
          </div>
        </section>
      </div>
    </div>
  );
}
