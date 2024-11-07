import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="hero-gradient flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center">
        <h1 className="bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm Avijit Pal
        </h1>
        <p className="mt-4 max-w-[700px] text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          Full Stack Developer with a passion for crafting intuitive and innovative digital experiences. I enjoy solving complex challenges with clean, efficient code.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/projects">
            <Button className="bg-indigo-500 text-white font-medium transition-transform hover:scale-105 px-6 py-3 hover:bg-indigo-600">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-transform hover:scale-105 px-6 py-3"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
