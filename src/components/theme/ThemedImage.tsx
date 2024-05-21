"use client"
import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState, useMemo } from 'react';

interface ThemedImageProps extends Omit<ImageProps, 'src'> {
  lightSrc: string;
  darkSrc: string;
}

const ThemedImage: React.FC<ThemedImageProps> = ({ lightSrc, darkSrc, alt, ...rest }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedSrc = useMemo(() => {
    return resolvedTheme === 'light' ? lightSrc : darkSrc;
  }, [resolvedTheme, lightSrc, darkSrc]);

  if (!mounted) return null;

  return (
    <Image
      src={selectedSrc}
      alt={alt}
      {...rest}
    />
  );
};

export default ThemedImage;
