'use client';

import { MathVisual } from './components/MathVisual';

export default function GeometricShapesPage() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-4 left-4 z-10">
        <a 
          href="/math"
          className="bg-white/80 dark:bg-black/80 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/90 transition-colors"
        >
        Back to Math
        </a>
      </div>
      <MathVisual />
    </div>
  );
} 