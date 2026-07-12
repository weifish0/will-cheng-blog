import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: '文章',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '標題' } }),
        description: fields.text({ label: '摘要', multiline: true }),
        publishedAt: fields.date({ label: '發佈日期' }),
        category: fields.select({
          label: '分類',
          options: [
            { label: '思考', value: '思考' },
            { label: '技術', value: '技術' },
            { label: '生活', value: '生活' },
          ],
          defaultValue: '思考',
        }),
        featured: fields.checkbox({ label: '精選文章', defaultValue: false }),
        content: fields.markdoc({ label: '文章內容' }),
      },
    }),
  },
});
