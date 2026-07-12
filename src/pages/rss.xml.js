import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPosts } from '../lib/content';

export async function GET(context) {
  const posts = sortPosts(await getCollection('posts'));
  return rss({
    title: 'Will Cheng',
    description: '關於建造、思考，與保持好奇的筆記。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/posts/${post.id}/`,
    })),
    customData: '<language>zh-TW</language>',
  });
}
