import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBlogPosts } from '@/lib/content';
import { formatDistance } from 'date-fns';

export function LatestPosts() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
          Latest Posts
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="card-hover h-full cursor-pointer border-border/50 bg-gradient-to-b from-background to-background/50 transition-colors hover:bg-accent/50">
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>
                      {formatDistance(new Date(post.date), new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}