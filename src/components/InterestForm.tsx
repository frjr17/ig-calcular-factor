import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "./ui/button";
import { interestFormFields, interestFormSchema } from "@/lib/forms";
import { BlockMath } from "react-katex";
import { equationsPerInterest } from "@/lib/functions";
import type { TInterestFormFieldsSchema, TUseFormType } from "@/lib/types";
import { Form } from "./ui/form";
import DynamicFormField from "./DynamicFormField";

export default function InterestForm(props: {
  handleSubmit: (newData: TInterestFormFieldsSchema) => void;
}) {
  const form = useForm<z.infer<typeof interestFormSchema>>({
    resolver: zodResolver(interestFormSchema),

    defaultValues: {
      type: undefined,
      interest: 0,
      periods: 0,
    },
  });

  const type = form.watch("type");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.handleSubmit)}
        className="space-y-6 w-80 m-auto"
      >
        {interestFormFields.map((formField) => (
          <DynamicFormField
            key={formField.name}
            field={formField}
            form={form as TUseFormType}
          />
        ))}
        {type && (
          <>
            Formula a utilizar: 
            <BlockMath>{equationsPerInterest[type](0, 0)}</BlockMath>
          </>
        )}
        <Button type="submit" className="w-80">
          Calcular
        </Button>
      </form>
    </Form>
  );
}
