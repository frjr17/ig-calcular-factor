import { z } from "zod";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select";
import { fields } from "@hookform/resolvers/nope/src/__tests__/__fixtures__/data.js";

const tiposDeFactores = [
  "A dado P (A/P)",
  "P dado A (P/A)",
  "P dado F (P/F)",
  "F dado P (F/P)",
  "F dado A (F/A)",
  "A dado F (A/F)",
] as const;

const tiposDeFactoresEnum = z.enum(tiposDeFactores);

const formSchema = z.object({
  tipoDeFactor: z.string(),
  dado: z.number(),
  interes: z.number(),
  periodos: z.number()
});

function App() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoDeFactor: "",
      dado: 0,
      interes: 0,
      periodos: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center items-center h-screen w-full">
        <Card className="w-full max-w-sm p-5 text-center">
          <CardHeader>
            <h1 className="text-4xl font-extrabold">Calculadora de Factor</h1>
          </CardHeader>
          <CardDescription className="italic">
            <span>Ingresa los datos y obtén el factor...</span>
            <span>y tal vez tu respuesta jajajajajaj</span>
          </CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  name='tipoDeFactor'
                  render={(props) => {
                    console.log(props)
                    return (
                    <FormItem>
                      <FormLabel>Tipo de Factor:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecciona un factor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {
                                tiposDeFactores.map(tipo=>(
                                  <SelectItem value={tipo}>{tipo}</SelectItem>
                                  
                                ))
                              }
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                             
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )
                  }}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
