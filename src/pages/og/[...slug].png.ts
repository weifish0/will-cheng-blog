import { getCollection } from 'astro:content';
import sharp from 'sharp';
import type { Post } from '../../lib/content';
import { createPostOgSvg } from '../../lib/og';
import { postHref, sortPosts } from '../../lib/content';

export const prerender = true;

export async function getStaticPaths() {
  const posts = sortPosts(await getCollection('posts'));

  return posts.map((post) => ({
    params: { slug: postHref(post).replace(/^\/+/, '') },
    props: { post },
  }));
}

export async function GET({ props }: { props: { post: Post } }) {
  const image = await sharp(Buffer.from(createPostOgSvg(props.post))).png().toBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
