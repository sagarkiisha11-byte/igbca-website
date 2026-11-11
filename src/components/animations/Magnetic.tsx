import React from "react";

export default function Magnetic({
  children,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}
