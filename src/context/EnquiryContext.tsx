"use client";

import React, { createContext, useContext, useState } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  preselectedCourse?: string;
  openEnquiryModal: (courseName?: string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string | undefined>(undefined);

  const openEnquiryModal = (courseName?: string) => {
    setPreselectedCourse(courseName);
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
    setPreselectedCourse(undefined);
  };

  return (
    <EnquiryContext.Provider
      value={{ isOpen, preselectedCourse, openEnquiryModal, closeEnquiryModal }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}

