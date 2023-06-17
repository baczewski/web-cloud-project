import { Input } from "@material-ui/core";
import { InputFieldProps } from "./InputFieldProps";
import styles from "./InputField.module.css";

export const InputField = ({
  placeholder,
  onChange,
  type,
  value,
  enableWarning = false
}: InputFieldProps
) => {
  const { normal, warning } = styles;

  return (
    <Input
      className={`${normal} ${enableWarning ? warning : ""}`}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
      required
      fullWidth
    />
  );
};
