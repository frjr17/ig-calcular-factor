import { useForm } from "react-hook-form";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import type { z } from "zod";
import { formSchema } from "./lib/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoDeFactor: "",
      interes: 0,
      periodos: 0,
      dado: 0,
    },
  });
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <header className="my-5 text-center">
          <h1 className="text-4xl font-bold">Calculadora de Factor</h1>
          <span className="text-xl italic">
            Calcula cada factor según su tipo.
          </span>
        </header>

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Ingresa tus datos</CardTitle>
            <CardDescription>
              Si no colocas el valor dado, solo se calculara el factor.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
