# Blog 文章圖片管理指南

這個 Blog 使用 Astro + Markdoc，文章本身放在 `src/content/posts/`。目前最推薦的圖片策略是：圖片跟著文章資料夾走，使用 Markdown 相對路徑引用，讓文章與圖片一起被 Git 管理。

Astro 官方建議可處理的本地圖片放在 `src/`，因為 Astro 可以在 build 時處理、最佳化與打包；`public/` 裡的檔案則會原樣輸出，不會被最佳化。[Astro Images 官方文件](https://docs.astro.build/en/guides/images/)

## 推薦的資料夾結構

系列文章可以這樣放：

```text
src/content/posts/building-with-intention/
├─ 01-quiet-systems.md
├─ 02-shipping-slowly.md
└─ images/
   ├─ system-diagram.webp
   └─ shipping-notes.webp
```

單篇文章也可以有自己的圖片資料夾：

```text
src/content/posts/standalone/
├─ better-questions.md
└─ images/
   └─ question-map.webp
```

命名建議：

- 使用小寫英文與 `-`，例如 `system-diagram.webp`
- 檔名要描述內容，不要使用 `IMG_1234.jpg`
- 同一篇文章的圖片集中放在自己的 `images/` 資料夾
- 優先使用 `.webp` 或 `.avif`
- 螢幕截圖先裁切與壓縮，再提交到 Git

## 在文章裡插入圖片

以這篇文章為例：

```md
## 從穩定開始

這是一段文章內容。

![安靜系統的結構圖](./images/system-diagram.webp)

圖片後面繼續寫文章。
```

路徑是「相對於目前的 `.md` 檔案」，不是相對於專案根目錄。Astro 支援 Markdown 圖片語法，並會處理位於 `src/` 的本地圖片；圖片也可以放在內容檔案旁邊。[Images in Markdown](https://docs.astro.build/en/guides/images/#images-in-markdown-files)

## alt 文字怎麼寫

`alt` 是給看不到圖片、使用螢幕閱讀器，或圖片載入失敗時使用的文字。

好的寫法：

```md
![一張顯示部署流程的手繪架構圖，從 GitHub 經過 Vercel 到網站](./images/deploy-flow.webp)
```

不好的寫法：

```md
![圖片](./images/deploy-flow.webp)
```

如果圖片只是裝飾，沒有額外資訊，可以使用空的 alt：

```md
![](./images/paper-texture.webp)
```

## 圖片格式與尺寸

建議依用途處理：

| 用途 | 建議格式 | 建議寬度 |
| --- | --- | ---: |
| 文章內插圖 | WebP | 1600px 以內 |
| UI 截圖 | WebP 或 PNG | 1600–2400px |
| 需要透明背景 | WebP 或 PNG | 視內容決定 |
| 照片 | WebP 或 AVIF | 1600–2000px |
| Logo / icon | SVG | 保留向量格式 |

不要把手機原圖或相機原始檔直接放進 repository。圖片過大會讓 Git repository 變肥，也會拖慢 build 與網站載入。

## 什麼時候用 `public/`

只有在需要固定、可預測的 URL 時才放到 `public/`，例如：

```text
public/og/default.png
public/images/avatar.jpg
```

文章中引用：

```md
![Will Cheng 頭像](/images/avatar.jpg)
```

`public/` 的圖片不會經過 Astro 最佳化。文章內容圖片通常不要放這裡，除非它需要被外部服務直接用固定網址讀取。[Astro `src/` vs `public/`](https://docs.astro.build/en/guides/images/#src-vs-public)

## 外部圖片或圖床

如果圖片很多、需要後台管理，或圖片會被多個網站共用，可以考慮 Cloudinary、ImageKit、S3/R2 等外部儲存。文章中使用完整 URL：

```md
![產品照片](https://cdn.example.com/posts/product-shot.webp)
```

外部圖片的優點是 repository 不會膨脹；缺點是多一個服務依賴，服務改網址或失效時，文章會出現壞圖。若要讓 Astro 最佳化遠端圖片，還需要在 `astro.config.mjs` 設定允許的 remote image domain。[Astro remote images](https://docs.astro.build/en/guides/images/#remote-images)

對目前這個個人 Blog，我建議先使用 Git + `src/` 本地圖片，等圖片量真的變大，再考慮圖床。

## Keystatic 編輯圖片

本機使用 `pnpm dev` 後，開啟 <http://localhost:4321/keystatic> 編輯文章文字；圖片檔案仍建議放在文章旁邊的 `images/` 資料夾，並在內容欄位插入相對路徑。

流程如下：

1. 把圖片放入文章的 `images/` 資料夾
2. 在 Keystatic 文章內容中加入 Markdown 圖片語法
3. 確認 `alt` 文字描述清楚
4. 用 `pnpm build` 檢查圖片路徑
5. commit 並 push 到 GitHub

## 發布前檢查清單

- [ ] 圖片路徑是相對於目前文章檔案
- [ ] `alt` 能描述圖片真正傳達的資訊
- [ ] 圖片不是超大原始檔
- [ ] 圖片檔名使用英文小寫與 `-`
- [ ] 手機版看起來沒有超出文章寬度
- [ ] 執行 `pnpm build` 沒有 `Image not found`
- [ ] 圖片與文章一起 commit

如果看到 `Image not found`，優先檢查檔名大小寫、副檔名，以及 Markdown 裡的相對路徑。Astro 的 Markdown 圖片路徑是相對於目前檔案解析的。[Image not found 錯誤說明](https://docs.astro.build/en/reference/errors/markdown-image-not-found/)
