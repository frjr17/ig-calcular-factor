import { useForm } from "react-hook-form";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import type { z } from "zod";
import { formSchema } from "./lib/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { tiposDeFactores } from "./lib/factores";
import { Input } from "./components/ui/input";
import { noScrollbarClass } from "./lib/utils";
import { Button } from "./components/ui/button";
import { toast } from "sonner";

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

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

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
          <CardContent>
            <Form   {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-80 m-auto">
                <FormField
                  control={form.control}
                  name="tipoDeFactor"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Tipo de Factor</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-80">
                              <SelectValue placeholder="Elige un tipo de factor" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tiposDeFactores.map((tipoDeFactor) => (
                              <SelectItem
                                key={tipoDeFactor}
                                value={tipoDeFactor}
                              >
                                {tipoDeFactor}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="interes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interés</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 10% ó 0.1"
                          type="number"
                          {...field}
                          className={`${noScrollbarClass}`}
                        />
                      </FormControl>
                      <FormDescription>
                        Ingresa el porcentaje de interés.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="periodos"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Periodos</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          className={`${noScrollbarClass}`}
                        />
                      </FormControl>
                      <FormDescription>
                        Ingresa el numero de periodos (n)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dado"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valor dado (Opcional)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          className={`${noScrollbarClass}`}
                        />
                      </FormControl>
                      <FormDescription>Ingresa el valor dado</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-80">
                  Calcular
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
