"use client";

import { createContext, useContext, useState } from "react";

const BarContext = createContext();

export function BarProvider({ children }) {
  const [status, setStatus] = useState(false);
  const changeStatus = (newstatus) => setStatus(newstatus);

  return (
    <BarContext.Provider value={{ changeStatus, status }}>
      {children}
    </BarContext.Provider>
  );
}

export const useBar = () => useContext(BarContext);
