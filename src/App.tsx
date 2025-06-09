import { useEffect, useState } from "react";
import "./App.css";
import FactorForm from "./components/FactorForm";
import { ThemeProvider } from "./components/theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import type { FormSchema } from "./lib/forms";
import { functionsPerFactor } from "./lib/functions";

function App() {
  const [data, setData] = useState<Partial<FormSchema>>({});
  const [factor, setFactor] = useState<number | string>(0);
  const [result, setResult] = useState<number | string>();

  const handleSubmit = (newData: FormSchema) => {
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
        setResult("Para saber el resultado final, debe saber el valor dado");
      }
    }
  }, [data]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="my-10 text-center">
        <h1 className="text-4xl font-bold">Calculadora de Factor</h1>
        <span className="text-xl italic">
          Calcula cada factor según su tipo.
        </span>
      </header>
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
                {data.type?.split(" ")[0] || "P"}={data.given || "X"}(
                {data.type?.split("(")[1]?.replace(")", "") || "P/F"},
                {data.interest || "100%"},{data.periods || "20"}) <br />
              </div>
              {factor ? (
                <>
                  <div>
                    {data.type?.split(" ")[0]}={data.given || "X"}({factor}){" "}
                    <br />
                  </div>
                  <div>
                    {data.type?.split(" ")[0]}={result}
                  </div>
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
    </ThemeProvider>
  );
}

export default App;
