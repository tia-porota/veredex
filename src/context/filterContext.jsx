import React, { useState } from "react";

export const FilterContext = React.createContext();

export function FilterProvider({ children }) {
  const [search, setSearch] = useState("");
  const [typesSearch, setTypesSearch] = useState([["nonetype"]]);
  const providerValue = {
    search,
    setSearch,
    typesSearch,
    setTypesSearch,
  }
  return (
    <FilterContext.Provider value={providerValue}>
      {children}
    </FilterContext.Provider>
  );
}
