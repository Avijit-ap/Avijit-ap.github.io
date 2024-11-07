import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { LatestPosts } from '@/components/latest-posts';

export default function Home() {
  return (
    <div className="container mx-auto max-h-full px-4 ">
      <HeroSection />
      <FeaturedProjects />
      <LatestPosts />
    </div>
  );
}