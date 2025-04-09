import Link from 'next/link';

export default function MathPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Mathematical Visualizations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/math/geometric-shapes"
          className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:bg-white/10 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">Geometric Shapes</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Interactive 3D visualization of geometric shapes with real-time parameter controls
          </p>
        </Link>
        {/* Add more math visualizations here */}
      </div>
    </div>
  );
} 