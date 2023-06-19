import { createContext, useContext, useState } from "react";
import { GlobalContextValue, GlobalState } from "./types";

export const GlobalContext = createContext<GlobalContextValue>({
  globalState: { jwt: "" },
  updateGlobalState: () => {},
});

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({ jwt: localStorage.getItem('user') ?? '' });

  const updateGlobalState = (newState: Partial<GlobalState>) => {
    setGlobalState((prevState) => ({
      ...prevState,
      ...newState
    }));
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useCurrentUser() {
  return useContext(GlobalContext).globalState.jwt;   
}