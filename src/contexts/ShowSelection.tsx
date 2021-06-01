import React, { createContext, useContext, useState } from "react";

import { Show } from "../models/show";

export const ShowSelectionContext = createContext<{
  selectedShow?: Show;
  setSelectedShow: (show?: Show) => void;
}>({ setSelectedShow: () => undefined });

export const ShowSelectionProvider = ({
  children,
}: {
  children: JSX.Element[];
}) => {
  const [selectedShow, setSelectedShow] = useState<Show | undefined>(undefined);

  return (
    <ShowSelectionContext.Provider value={{ selectedShow, setSelectedShow }}>
      {children}
    </ShowSelectionContext.Provider>
  );
};

export const useShowSelection = () => useContext(ShowSelectionContext);
