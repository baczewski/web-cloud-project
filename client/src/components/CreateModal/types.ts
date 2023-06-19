export enum FetchType {
  notes = "notes",
  todos = "todos"
}

export interface CreateModalProps {
  open: boolean;
  onClose: () => void;
  hasDateInput?: boolean;
  type: FetchType;
};
