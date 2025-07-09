import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "./ui/form";
import type { TFactorFormSchema, TFormFieldsSchema, TUseFormType } from "@/lib/types";
import { factorFormFields, factorFormSchema } from "@/lib/forms";
import DynamicFormField from "./DynamicFormField";
import { Button } from "./ui/button";

interface IFactorFormProps {
  handleSubmit: (newData: TFormFieldsSchema) => void;
}

export default function FactorForm(props: IFactorFormProps) {
  const form = useForm<TFactorFormSchema>({
    resolver: zodResolver(factorFormSchema),

    defaultValues: {
      type: undefined,
      interest: 0,
      periods: 0,
      given: 0,
    },
  });

  function onSubmit(data: TFactorFormSchema) {
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
        {factorFormFields.map((formField) => (
          <DynamicFormField field={formField} form={form as TUseFormType} />
        ))}

        <Button type="submit" className="w-80">
          Calcular
        </Button>
      </form>
    </Form>
  );
}
