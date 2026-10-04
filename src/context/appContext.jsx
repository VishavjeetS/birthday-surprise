import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [numberOfCandlesLit, setNumberOfCandlesLit] = useState(0);
  const isCandlesLit = numberOfCandlesLit >= 3;

  return (
    <AppContext.Provider
      value={{
        isCandlesLit,
        setNumberOfCandlesLit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
