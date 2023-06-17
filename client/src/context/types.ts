export interface GlobalState {
  jwt: string;
};

export interface GlobalContextValue {
  globalState: GlobalState;
  updateGlobalState: (newState: Partial<GlobalState>) => void;
}