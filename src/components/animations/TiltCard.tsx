import React from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  withGlare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  return (
    <div
      className={`transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
