import type { Post } from './content';
import { formatDate, getPostSeries, postHref } from './content';

const siteUrl = 'https://blog.will-cheng.com';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function wrapText(value: string, maxChars: number, maxLines = 2) {
  const characters = Array.from(value.replace(/\s+/g, ' ').trim());
  const lines: string[] = [];

  for (let index = 0; index < characters.length && lines.length < maxLines; index += maxChars) {
    lines.push(characters.slice(index, index + maxChars).join(''));
  }

  return lines;
}

export function getPostOgImage(post: Post) {
  if (post.data.ogImage) return post.data.ogImage;
  return `/og/${postHref(post).replace(/^\/+/, '')}.png`;
}

export function createPostOgSvg(post: Post) {
  const series = getPostSeries(post);
  const titleLines = wrapText(post.data.title, 15);
  const descriptionLines = wrapText(post.data.description, 32);
  const titleMarkup = titleLines
    .map((line, index) => `<tspan x="160" dy="${index === 0 ? 0 : 78}">${escapeXml(line)}</tspan>`)
    .join('');
  const descriptionMarkup = descriptionLines
    .map((line, index) => `<tspan x="160" dy="${index === 0 ? 0 : 34}">${escapeXml(line)}</tspan>`)
    .join('');
  const context = [post.data.category, series?.title].filter(Boolean).join('  ·  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050817"/>
      <stop offset="52%" stop-color="#101b3d"/>
      <stop offset="100%" stop-color="#050817"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="12%" r="62%">
      <stop offset="0%" stop-color="#5c7dff" stop-opacity=".42"/>
      <stop offset="100%" stop-color="#5c7dff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="72" y="72" width="1056" height="486" rx="28" fill="#ffffff" fill-opacity=".035" stroke="#a9bbff" stroke-opacity=".25"/>
  <rect x="112" y="112" width="7" height="360" rx="3.5" fill="#9db4ff"/>
  <text x="160" y="174" fill="#9db4ff" font-family="Arial, 'Noto Sans CJK TC', 'Noto Sans TC', sans-serif" font-size="24" font-weight="700" letter-spacing="7">WILL CHENG</text>
  <text x="160" y="224" fill="#9db4ff" font-family="Arial, 'Noto Sans CJK TC', 'Noto Sans TC', sans-serif" font-size="20" font-weight="700">${escapeXml(context)}</text>
  <text x="160" y="330" fill="#f4f6ff" font-family="Arial, 'Noto Sans CJK TC', 'Noto Sans TC', sans-serif" font-size="64" font-weight="400">${titleMarkup}</text>
  <text x="160" y="492" fill="#aeb7cb" font-family="Arial, 'Noto Sans CJK TC', 'Noto Sans TC', sans-serif" font-size="23">${descriptionMarkup}</text>
  <text x="160" y="538" fill="#aeb7cb" font-family="Arial, 'Noto Sans CJK TC', 'Noto Sans TC', sans-serif" font-size="18">${escapeXml(formatDate(post.data.publishedAt))}  ·  ${escapeXml(siteUrl.replace('https://', ''))}</text>
</svg>`;
}
