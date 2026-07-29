// components/common/ImageWithFallback.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({ src, alt, icon: Icon, rounded = '', className }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${rounded} ${className}`}>
        <Icon className="w-12 h-12 text-gray-400" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      className={`object-cover ${rounded} ${className}`}
      onError={() => setError(true)}
      // DO NOT add unoptimized for local files – it's not needed
    />
  );
}