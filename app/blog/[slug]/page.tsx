import BlogPostClient from './BlogPostClient';
import { INITIAL_BLOG_POSTS } from '@/lib/mockData';

export async function generateStaticParams() {
  return INITIAL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page() {
  return <BlogPostClient />;
}
