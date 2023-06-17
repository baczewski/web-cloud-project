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
      style={{color: "white", backgroundColor: "#525252", paddingLeft: "0.5rem", padding: "0.7rem"}}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
      required
      fullWidth
    />
  );
};
