import FactorForm from "@/components/FactorForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { functionsPerFactor } from "@/lib/functions";
import type { TFormFieldsSchema } from "@/lib/types";
import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";

export interface TFactorGivenDataProps {
  data: Partial<TFormFieldsSchema>;
}

function FactorGivenData(props: TFactorGivenDataProps) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Datos</h1>
      <div className="">
        <strong>Tipo de Factor: </strong>
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
      <div className="">
        <strong>Valor Dado: </strong>
        <span>{props.data.given || "No dado"}</span>
      </div>
    </section>
  );
}

export interface TFactorDeclarationAndCalcProps {
  data: Partial<TFormFieldsSchema>;
  factor: number | string;
  result?: number | string;
}

const noGivenResult = "Para saber el resultado final, debe saber el valor dado";

function FactorDeclarationAndCalc(props: TFactorDeclarationAndCalcProps) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Declaración & Cálculo</h1>
      <code className="space-y-3">
        <div>
          <BlockMath>
            {`${props.data.type?.split(" ")[0] || "P"}=${
              props.data.given || "X"
            }(${props.data.type?.split("(")[1]?.replace(")", "") || "P/F"},${
              props.data.interest ? props.data.interest + "\\%" : "100\\%"
            },${props.data.periods || "20"})`}
          </BlockMath>
        </div>
        {props.factor ? (
          <>
            <BlockMath>
              {`${props.data.type?.split(" ")[0]}=${props.data.given || "X"}(${
                props.factor
              })`}
            </BlockMath>
            {props.result !== noGivenResult && (
              <BlockMath>
                {`${props.data.type?.split(" ")[0]}=${props.result}`}
              </BlockMath>
            )}
          </>
        ) : null}
      </code>
    </section>
  );
}

interface TFactorResults {
  factor: number | string;
  result?: number | string;
}

function FactorResults(props: TFactorResults) {
  return (
    <section className="my-5 space-y-3">
      <h1 className="text-3xl font-bold">Resultados</h1>
      <div className="">
        <strong>El factor es: </strong>
        <span>{props.factor}</span>
      </div>
      <div className="">
        <strong>La respuesta según el valor dado es: </strong>
        <span>{props.result || noGivenResult}</span>
      </div>
    </section>
  );
}

export default function FactorCalculator() {
  const [data, setData] = useState<Partial<TFormFieldsSchema>>({});
  const [factor, setFactor] = useState<number | string>(0);
  const [result, setResult] = useState<number | string>();

  const handleSubmit = (newData: TFormFieldsSchema) => {
    setData(newData);
  };

  useEffect(() => {
    if (data.type) {
      const interest = data.interest! / 100;
      const newFactor = functionsPerFactor[data.type!](
        interest!,
        data.periods!
      );

      setFactor(newFactor.toFixed(4));
      if (data.given) {
        setResult((newFactor * data.given).toFixed(2));
      } else {
        setResult(noGivenResult);
      }
    }
  }, [data]);

  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-10">
      <div className="flex flex-col justify-center items-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Ingresa tus datos</CardTitle>
            <CardDescription>
              Si no colocas el valor dado, solo se calculara el factor.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FactorForm handleSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
      {data.type && (
        <div className="flex flex-col justify-center text-center md:text-left">
          <FactorGivenData data={data} />
          <FactorDeclarationAndCalc
            data={data}
            result={result}
            factor={factor}
          />
          <FactorResults factor={factor} result={result} />
        </div>
      )}
    </div>
  );
}
