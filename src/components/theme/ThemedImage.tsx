"use client"
import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';

interface ThemedImageProps extends Omit<ImageProps, 'src'> {
  lightSrc: string;
  darkSrc: string;
}

const ThemedImage: React.FC<ThemedImageProps> = ({ lightSrc, darkSrc, alt, ...rest }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const selectedSrc = resolvedTheme === 'light' ? lightSrc : darkSrc;

  console.log(`Current theme: ${resolvedTheme}`);
  console.log(`Selected src: ${selectedSrc}`);

  return (
    <Image
      src={selectedSrc}
      alt={alt}
      {...rest}
    />
  );
};

export default ThemedImage;

