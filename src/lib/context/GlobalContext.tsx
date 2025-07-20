"use client";

import React from "react";
import { createContext, useContext } from "react";
import type { Feedback, Staff, Nursery } from "@/gql/sanity/codegen";

type GlobalContextType = {
  reviews?: Feedback[];
  nurseries?: Nursery[];
  staff?: Staff[];
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
  reviews,
  nurseries,
  staff,
}: {
  children: React.ReactNode;
  reviews?: Feedback[];
  nurseries?: Nursery[];
  staff?: Staff[];
}) => {
  return (
    <GlobalContext.Provider value={{ reviews, nurseries, staff }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext must be used within an AppProvider");
  }
  return context;
};
