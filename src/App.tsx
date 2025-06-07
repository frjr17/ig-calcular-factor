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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="my-10 text-center">
        <h1 className="text-4xl font-bold">Calculadora de Factor</h1>
        <span className="text-xl italic">
          Calcula cada factor según su tipo.
        </span>
      </header>
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-full">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Ingresa tus datos</CardTitle>
              <CardDescription>
                Si no colocas el valor dado, solo se calculara el factor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FactorForm />
            </CardContent>
          </Card>
        </div>
        <div className="">
          <section>
            <h1>Datos</h1>
          </section>
          <section>
            <h1>Declaración</h1>
          </section>
          <section>
            <h1>Resultados</h1>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
