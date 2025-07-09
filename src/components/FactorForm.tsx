import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { noScrollbarClass } from "@/lib/utils";
import { Button } from "./ui/button";
import { factorTypes, formSchema } from "@/lib/forms";
import type { TFormSchema } from "@/lib/types";

export default function FactorForm(props: {
  handleSubmit: (newData: TFormSchema) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      type: undefined,
      interest: 0,
      periods: 0,
      given: 0,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (process.env.NODE_ENV === "development") {
      toast("You submitted the following values", {
        description: (
          <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    props.handleSubmit(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-80 m-auto"
      >
        <FormField
          control={form.control}
          name="type"
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
                    {factorTypes.map((tipoDeFactor) => (
                      <SelectItem key={tipoDeFactor} value={tipoDeFactor}>
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
          name="interest"
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
          name="periods"
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
          name="given"
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
  );
}
