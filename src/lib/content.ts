import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export type Series = {
  slug: string;
  title: string;
  description: string;
  posts: Post[];
};

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

export function postSlug(post: Post) {
  return post.id.split('/').at(-1) ?? post.id;
}

export function getPostSeries(post: Post) {
  if (!post.data.seriesSlug || !post.data.seriesTitle) return undefined;
  return {
    slug: post.data.seriesSlug,
    title: post.data.seriesTitle,
    description: post.data.seriesDescription ?? '',
    order: post.data.seriesOrder ?? 1,
  };
}

export function postHref(post: Post) {
  const series = getPostSeries(post);
  return series ? `/series/${series.slug}/${postSlug(post)}` : `/posts/${postSlug(post)}`;
}

export function getSeries(posts: Post[]): Series[] {
  const seriesMap = new Map<string, Series>();

  sortPosts(posts).forEach((post) => {
    const info = getPostSeries(post);
    if (!info) return;

    const existing = seriesMap.get(info.slug);
    if (existing) {
      existing.posts.push(post);
      return;
    }

    seriesMap.set(info.slug, {
      slug: info.slug,
      title: info.title,
      description: info.description,
      posts: [post],
    });
  });

  return [...seriesMap.values()].map((series) => ({
    ...series,
    posts: [...series.posts].sort((a, b) => {
      const orderA = getPostSeries(a)?.order ?? 1;
      const orderB = getPostSeries(b)?.order ?? 1;
      return orderA - orderB;
    }),
  }));
}
