# Will Cheng Blog

個人 Blog，使用 Astro、Markdown/Markdoc 與 Keystatic 建立。

## 開發

```bash
pnpm install
pnpm dev
```

`pnpm dev` 會以 background mode 啟動 Astro。開啟 <http://localhost:4321> 查看網站；需要管理背景伺服器時使用 `astro dev status`、`astro dev logs`、`astro dev stop`。

文章放在 `src/content/posts/`，可以直接用 Markdown/Markdoc 編輯。系列文章使用資料夾歸檔，例如 `src/content/posts/building-with-intention/01-quiet-systems.mdoc`；每篇文章的 `seriesSlug`、`seriesTitle` 與 `seriesOrder` 會自動建立系列頁與上一篇／下一篇導覽。本機也可以開啟 <http://localhost:4321/keystatic> 使用內容編輯介面。

## 路由

- `/`：首頁
- `/writing`：文章列表
- `/series`：系列文章列表
- `/series/:series`：系列總覽
- `/series/:series/:slug`：系列文章閱讀頁
- `/about`：關於
- `/posts/:slug`：文章閱讀頁
- `/rss.xml`：RSS feed
- `/keystatic`：本機內容編輯器

## 部署

專案使用 Vercel adapter，預設網站網址為 `https://blog.will-cheng.com`。將 GitHub repository 匯入 Vercel 後，Install Command 使用 `pnpm install --frozen-lockfile`，Build Command 使用 `pnpm build`。

若要讓線上 `/keystatic` 直接寫回 GitHub，需要依照 Keystatic 的 GitHub mode 設定 GitHub App 與環境變數；在此之前，建議用本機 Keystatic 或直接編輯 Markdown，再 commit/push。

## 圖片

文章圖片建議放在文章資料夾旁邊，並用相對路徑引用：

```text
src/content/posts/building-with-intention/
├─ 01-quiet-systems.mdoc
└─ images/
   └─ system-diagram.webp
```

文章內使用：

```md
![安靜系統的結構圖](./images/system-diagram.webp)
```

完整說明請參考：[文章圖片管理指南](./docs/writing-with-images.md)。

文章範本請參考：[`.mdoc` 文章撰寫範本](./docs/article-template.mdoc)；程式碼格式請參考：[文章程式碼指南](./docs/writing-code.md)。
