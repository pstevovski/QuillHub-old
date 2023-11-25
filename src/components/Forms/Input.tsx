import cn from "@/utils/classnames";
import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
  modifierClass?: string;
  error?: FieldError;
}

function FormInput({
  register,
  label = "",
  modifierClass = "",
  error = undefined,
  ...props
}: FormInputProps) {
  return (
    <div>
      {label ? (
        <label className="text-sm text-slate-400 mb-2" htmlFor={props.id}>
          {label}
        </label>
      ) : null}

      <input
        type="text"
        className={cn(
          "w-full border p-2 rounded mb-5 focus:outline-none placeholder:text-slate-300",
          error ? "border-red-500 mb-0" : "",
          modifierClass
        )}
        {...register}
        {...props}
      />

      {error ? (
        <p className="text-sm text-red-500 mb-5">{error.message}</p>
      ) : null}
    </div>
  );
}

export default FormInput;
