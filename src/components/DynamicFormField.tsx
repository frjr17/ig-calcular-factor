import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Input } from "./ui/input";
import { cn, noScrollbarClass } from "@/lib/utils";
import type { IFormField, TUseFormType } from "@/lib/types";

interface IDynamicFormFieldProps {
  field: IFormField;
  form: TUseFormType;
}

export default function DynamicFormField(props: IDynamicFormFieldProps) {
  if (props.field.type === "select" && props.field.options) {
    return (
      <FormField
        control={props.form.control}
        name={props.field.name}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>{props.field.label}</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-80">
                    <SelectValue placeholder={props.field.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {props.field.options!.map((tipoDeFactor) => (
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
    );
  }
  return (
    <FormField
      key={props.field.name}
      control={props.form.control}
      name={props.field.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.field.label}</FormLabel>
          <FormControl>
            <Input
              type={props.field.type}
              placeholder={props.field.placeholder}
              {...field}
              className={cn(noScrollbarClass)}
            />
          </FormControl>
          <FormDescription>{props.field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
