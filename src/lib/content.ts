import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export function sortPosts(posts: Post[]) {
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric', month: 'short', day: 'numeric',
  }).format(date);
}

export function readingTime(post: Post) {
  const words = post.body?.trim().split(/\s+/).length ?? 0;
  return `${Math.max(1, Math.ceil(words / 220))} 分鐘閱讀`;
}
