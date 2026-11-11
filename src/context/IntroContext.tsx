"use client";

import React, { createContext, useContext, useState } from "react";

interface IntroContextType {
  showIntro: boolean;
  introExiting: boolean;
  introDone: boolean;
  setIntroExiting: (val: boolean) => void;
  setIntroDone: (val: boolean) => void;
  setShowIntro: (val: boolean) => void;
}

const IntroContext = createContext<IntroContextType>({
  showIntro: true,
  introExiting: false,
  introDone: false,
  setIntroExiting: () => {},
  setIntroDone: () => {},
  setShowIntro: () => {},
});

export function IntroProvider({ children }: { children: React.ReactNode }) {
  // Always true initially on server and first paint
  const [showIntro, setShowIntro] = useState(true);
  const [introExiting, setIntroExiting] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <IntroContext.Provider
      value={{
        showIntro,
        introExiting,
        introDone,
        setIntroExiting,
        setIntroDone,
        setShowIntro,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}

