// @ts-nocheck
import { getBlogPost, getBlogPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Required for static site generation with `output: export`
export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  let post;
  
  try {
    post = getBlogPost(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </article>
  );
}