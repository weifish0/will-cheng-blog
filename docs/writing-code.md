# 在文章中放入程式碼

文章使用 Markdoc 搭配 Astro 官方的 Shiki syntax highlighting。使用 Markdown code fence 即可產生語法高亮、深淺色主題與複製按鈕。

## 程式碼

在 `.mdoc` 或 `.md` 中，於三個反引號後面標示語言：

````md
```ts
const greeting = 'Hello, Will';
console.log(greeting);
```
````

常用語言例如：`ts`、`tsx`、`js`、`jsx`、`astro`、`html`、`css`、`json`、`bash`、`shell`、`sql`、`python`。

## 指令

Shell 指令建議使用 `bash`：

````md
```bash
pnpm install
pnpm dev
```
````

網站會自動提供：

- Shiki 語法高亮
- 淺色與深色主題切換
- 橫向捲動，不破壞手機版排版
- 複製程式碼按鈕

行內程式碼則使用單個反引號，例如：`pnpm build`。
