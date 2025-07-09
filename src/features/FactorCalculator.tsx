import FactorForm from "@/components/FactorForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { functionsPerFactor } from "@/lib/functions";
import type { TFormSchema } from "@/lib/types";
import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";

export default function FactorCalculator() {
  const [data, setData] = useState<Partial<TFormSchema>>({});
  const [factor, setFactor] = useState<number | string>(0);
  const [result, setResult] = useState<number | string>();
  const noGivenResult = "Para saber el resultado final, debe saber el valor dado";

  const handleSubmit = (newData: TFormSchema) => {
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
      <div className="flex flex-col justify-center text-center md:text-left">
        <section className="my-5 space-y-3">
          <h1 className="text-3xl font-bold">Datos</h1>
          <div className="">
            <strong>Tipo de Factor: </strong>
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
          <div className="">
            <strong>Valor Dado: </strong>
            <span>{data.given || "No dado"}</span>
          </div>
        </section>
        <section className="my-5 space-y-3">
          <h1 className="text-3xl font-bold">Declaración & Cálculo</h1>
          <code className="space-y-3">
            <div>
              <BlockMath>
                {`${data.type?.split(" ")[0] || "P"}=${data.given || "X"}(${
                  data.type?.split("(")[1]?.replace(")", "") || "P/F"
                },${data.interest ? data.interest + "\\%" : "100\\%"},${
                  data.periods || "20"
                })`}
              </BlockMath>
            </div>
            {factor ? (
              <>
                <BlockMath>
                  {`${data.type?.split(" ")[0]}=${
                    data.given || "X"
                  }(${factor})`}
                </BlockMath>
                {result !== noGivenResult && (
                  <BlockMath>
                    {`${data.type?.split(" ")[0]}=${result}`}
                  </BlockMath>
                )}
              </>
            ) : null}
          </code>
        </section>
        <section className="my-5 space-y-3">
          <h1 className="text-3xl font-bold">Resultados</h1>
          <div className="">
            <strong>El factor es: </strong>
            <span>{factor}</span>
          </div>
          <div className="">
            <strong>La respuesta según el valor dado es: </strong>
            <span>{result || "Un número muy grande (o muy chico)"}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
