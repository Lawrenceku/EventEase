import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { HTMLInputTypeAttribute, useState } from "react";

interface InputLabelProps {
  label?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  control: any;
  description?: string;
  className?: string;
  placeholder?: string;
}

export default function FormInput({
  name,
  label,
  type,
  control,
  description,
  className,
  placeholder,
}: InputLabelProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              className={className}
              type={type}
              placeholder={label || placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
