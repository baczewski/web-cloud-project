import { createContext, useState } from "react";
import { GlobalContextValue, GlobalState } from "./types";

export const GlobalContext = createContext<GlobalContextValue>({
  globalState: { jwt: "" },
  updateGlobalState: () => {},
});

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({ jwt: "" });

  const updateGlobalState = (newState: Partial<GlobalState>) => {
    setGlobalState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};