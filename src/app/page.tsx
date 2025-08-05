"use client";
import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./components/MapClient'), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <MapClient />
    </div>
  );
}
