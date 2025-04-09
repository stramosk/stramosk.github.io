'use client';

import { ShapeParams } from './Shape';

export function Controls({ params, setParams }: { 
    params: ShapeParams;
    setParams: (params: ShapeParams) => void;
  }) {
    return (
      <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/80 p-4 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Shape</label>
            <select
              value={params.type}
              onChange={(e) => setParams({ ...params, type: e.target.value as ShapeParams['type'] })}
              className="w-full p-2 rounded border"
            >
              <option value="torus">Torus</option>
              <option value="sphere">Sphere</option>
              <option value="cube">Cube</option>
              <option value="torusKnot">Torus Knot</option>
            </select>
          </div>
          {params.type !== 'cube' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Radius</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  value={params.radius}
                  onChange={(e) => setParams({ ...params, radius: parseFloat(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tube</label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={params.tube}
                  onChange={(e) => setParams({ ...params, tube: parseFloat(e.target.value) })}
                  className="w-full"
                />
              </div>
            </>
          )}
          {params.type === 'cube' && (
            <div>
              <label className="block text-sm font-medium mb-1">Size</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={params.size || 3}
                onChange={(e) => setParams({ ...params, size: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Segments</label>
            <input
              type="range"
              min="3"
              max="32"
              step="1"
              value={params.segments}
              onChange={(e) => setParams({ ...params, segments: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Twist</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={params.twist}
              onChange={(e) => setParams({ ...params, twist: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              type="color"
              value={params.color}
              onChange={(e) => setParams({ ...params, color: e.target.value })}
              className="w-full h-8"
            />
          </div>
          <button
            onClick={() => setParams({
              ...params,
              radius: Math.random() * 4 + 1,
              tube: Math.random() * 1.9 + 0.1,
              segments: Math.floor(Math.random() * 29) + 3,
              twist: Math.random() * 4 - 2,
              color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
              size: Math.random() * 4 + 1
            })}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Randomize
          </button>
        </div>
      </div>
    );
  }