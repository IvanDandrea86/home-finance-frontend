import { Controller } from "react-hook-form";
import React, { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface IFormInputText {
  name: string;
  control: any;
  label: string;
  errors: any;
 
}
const FormInputText: FC<IFormInputText & TextFieldProps> = ({
  name,
  control,
  label,
  errors,
  sx,
  type
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true, minLength: 3 }}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={sx}
          onChange={onChange}
          value={value}
          label={label}
          required
          type={type}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name].message : ""}
        />
      )}
    />
  );
};
export default FormInputText;
