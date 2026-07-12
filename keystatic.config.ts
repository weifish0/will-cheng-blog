import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: '文章',
      slugField: 'title',
      path: 'src/content/posts/*/*',
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
        seriesSlug: fields.slug({ name: { label: '系列 slug' }, description: '例如: building-with-intention' }),
        seriesTitle: fields.text({ label: '系列名稱', description: '留白代表單篇文章' }),
        seriesDescription: fields.text({ label: '系列簡介', multiline: true }),
        seriesOrder: fields.integer({ label: '系列順序', defaultValue: 1 }),
        references: fields.array(
          fields.object({
            title: fields.text({ label: '名稱' }),
            url: fields.url({ label: '網址', validation: { isRequired: true } }),
            note: fields.text({ label: '補充說明', multiline: true }),
          }),
          { label: '參考資料', description: '可留白；會顯示在文章正文下方' },
        ),
        content: fields.markdoc({ label: '文章內容', extension: 'md' }),
      },
    }),
  },
});
