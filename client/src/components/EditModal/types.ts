import { DetailsProps } from "../Details/DetailsProps";

export interface EditModalProps {
  details: DetailsProps;
  updateDetailes: (details: DetailsProps) => void;
  open: boolean;
  onClose: () => void;
};
