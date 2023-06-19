import { DetailsProps } from "../Details/DetailsProps";

export interface EditModalProps {
  id: string;
  details: DetailsProps;
  open: boolean;
  onClose: () => void;
  reload: () => void;
};
