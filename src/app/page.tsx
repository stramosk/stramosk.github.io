import { MathVisual } from '@/app/math/geometric-shapes/components/MathVisual';
import { About } from '@/components/home/About';

export default function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <MathVisual />
      </section>
      <About />
    </main>
  );
}
