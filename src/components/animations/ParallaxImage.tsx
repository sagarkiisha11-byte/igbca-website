import React from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
}

export default function ParallaxImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  imageClassName = "",
  objectPosition = "center",
}: ParallaxImageProps) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition }}
        className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${imageClassName}`}
      />
    </div>
  );
}
