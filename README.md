# Will Cheng Blog

個人 Blog，使用 Astro、Markdown/Markdoc 與 Keystatic 建立。

## 開發

```bash
npm install
npm run dev
```

開啟 <http://localhost:4321> 查看網站。

文章放在 `src/content/posts/`，可以直接用 Markdown/Markdoc 編輯；本機也可以開啟 <http://localhost:4321/keystatic> 使用內容編輯介面。

## 路由

- `/`：首頁
- `/writing`：文章列表
- `/about`：關於
- `/posts/:slug`：文章閱讀頁
- `/rss.xml`：RSS feed
- `/keystatic`：本機內容編輯器

## 部署

專案使用 Vercel adapter，預設網站網址為 `https://blog.will-cheng.com`。將 GitHub repository 匯入 Vercel 後，Build Command 使用 `npm run build`。

若要讓線上 `/keystatic` 直接寫回 GitHub，需要依照 Keystatic 的 GitHub mode 設定 GitHub App 與環境變數；在此之前，建議用本機 Keystatic 或直接編輯 Markdown，再 commit/push。
