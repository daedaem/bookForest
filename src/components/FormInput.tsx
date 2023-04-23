// FormInput.tsx
import { RegisterOptions, UseFormRegister, FieldValues } from "react-hook-form";
import classes from "./FormInput.module.css";

type FormInputProps = {
  label: string;
  name: any;
  register: any;
  validation: RegisterOptions;
  type: string;
  errors: any;
  fields?: string[];
  defaultValue?: string;
};

const FormInput = ({
  label,
  name,
  register,
  validation,
  type,
  errors,
  fields,
  defaultValue,
}: FormInputProps) => {
  if (fields?.includes(name)) {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          {...register(name, validation)}
          type={type}
          defaultValue={defaultValue}
        />
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
