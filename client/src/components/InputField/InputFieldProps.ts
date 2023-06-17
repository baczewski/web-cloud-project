export interface InputFieldProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  type: string;
  value: string;
};
