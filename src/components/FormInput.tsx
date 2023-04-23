// FormInput.tsx
import { RegisterOptions, UseFormRegister, FieldValues } from "react-hook-form";
import classes from "./FormInput.module.css";

type FormInputProps = {
  label: string;
  name: any;
  // register: UseFormRegister<FormData>;
  register: any;
  validation: RegisterOptions;
  type: string;
  errors: any;
  fields?: string[];
};

const FormInput = ({
  label,
  name,
  register,
  validation,
  type,
  errors,
  fields,
}: FormInputProps) => {
  if (fields?.includes(name)) {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input {...register(name, validation)} type={type} />
        {errors[name] ? (
          <p className={classes.error}>{errors[name].message}</p>
        ) : (
          <p className={classes.errorPlaceholder}></p>
        )}
      </>
    );
  }
  return null;
};

export default FormInput;
