import { Input } from "@material-ui/core";
import { InputFieldProps } from "./InputFieldProps";

export const InputField = ({
  placeholder,
  onChange,
  type,
  value
}: InputFieldProps
) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
      required
    />
  );
};
