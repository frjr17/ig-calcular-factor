import { useState } from "react";
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

function App() {
  const [data, setData] = useState<Partial<FormSchema>>({});

  const handleSubmit = (newData: FormSchema) => {
    setData(newData);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="my-10 text-center">
        <h1 className="text-4xl font-bold">Calculadora de Factor</h1>
        <span className="text-xl italic">
          Calcula cada factor según su tipo.
        </span>
      </header>
      <div className="flex justify-center space-x-10">
        {false ? null : (
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
        )}
        <div className="flex flex-col justify-center">
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
              <span>{data.given}</span>
            </div>
          </section>
          <section className="my-5 space-y-3">
            <h1 className="text-3xl font-bold">Declaración & Cálculo</h1>
            <code className="space-y-3">
              <div>
                P=$200,000(P/A,2%,10) <br />
              </div>
              <div>
                P=$200,000(0.12356) <br />
              </div>
              <div>P=Whatever...</div>
            </code>
          </section>
          <section className="my-5 space-y-3">
            <h1 className="text-3xl font-bold">Resultados</h1>
            <div className="">
              <strong>El factor es: </strong>
              <span>0.120349</span>
            </div>
            <div className="">
              <strong>La respuesta según el valor dado es: </strong>
              <span>Un número muy grande (o muy chico)</span>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
