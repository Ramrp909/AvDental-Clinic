'use client';

import { useEffect, useState } from 'react';

export default function FloatingPromo() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-4 z-40 bg-white border border-blue-100 shadow-lg rounded-xl p-3 max-w-[220px] animate-pulse">
      <p className="text-xs text-gray-500">
        Special Offer
      </p>

      <p className="font-bold text-primary text-lg">
        AVINDENT
      </p>

      <p className="text-sm text-gray-600">
        Free Consultation Available
      </p>
    </div>
  );
}