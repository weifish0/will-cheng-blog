---
# =============================
# 必填欄位：每篇文章都要填寫
# =============================
title: 文章標題
description: 文章摘要。會顯示在文章列表、SEO description 與社群分享的 og:description。
publishedAt: 2026-07-13

# =============================
# 可選欄位：不填會使用預設值
# =============================
category: 技術
featured: false
draft: true

# =============================
# 條件式欄位：只有文章屬於系列時才需要，預設先註解。
# 三篇以上系列文章建議每篇都填寫 seriesSlug、seriesTitle、seriesOrder。
# seriesDescription 通常只要在系列第一篇保留即可，但目前建議每篇都填。
# =============================
# seriesSlug: your-series-slug
# seriesTitle: 系列名稱
# seriesDescription: 這個系列會討論什麼，以及讀者可以得到什麼。
# seriesOrder: 1

# =============================
# 可選欄位：通常不用填
# 不填時，網站會自動產生文章專屬 OG 圖。
# 如果要使用自訂 OG 圖，填 public/ 下的絕對路徑或完整 URL。
# 例如：/images/og/my-article.png
# =============================
# ogImage: /images/og/my-article.png

# =============================
# 可選欄位：參考資料
# 沒有參考資料時，整段 references 都刪除。
# =============================
# references:
#   - title: 參考資料標題
#     url: https://example.com/reference
#     note: 這份資料和文章哪一段有關。
---

<!--
使用方式：
1. 複製這個檔案到 src/content/posts/ 下面的文章資料夾。
2. 將檔名改成小寫英文，例如 01-my-article.md。
3. 填好上方 frontmatter。
4. 發布前把 draft 改成 false。
5. 刪除這些教學註解與尚未使用的區塊。
-->

## 第一個段落標題

文章開頭可以先交代背景、問題，以及這篇文章想留下的觀察。

行內程式碼使用單個反引號，例如 `pnpm build`、`src/content/posts/` 或 `seriesSlug`。

## 插入圖片

圖片建議跟著文章放在同一個資料夾：

```text
src/content/posts/your-series-slug/
├─ 01-my-article.md
└─ images/
   ├─ diagram.webp
   └─ screenshot.png
```

文章檔案使用相對路徑引用圖片：

![描述圖片真正傳達的內容](./images/diagram.webp)

`alt` 要描述圖片內容；如果圖片只是裝飾，才使用空的 alt：`![](./images/texture.webp)`。

## 放入程式碼或指令

在三個反引號後標註語言，就會啟用語法高亮：

```ts
type Article = {
  title: string;
  publishedAt: Date;
};

const article: Article = {
  title: '文章標題',
  publishedAt: new Date(),
};
```

Shell 指令建議使用 `bash`：

```bash
pnpm install
pnpm dev
pnpm build
```

網站會自動提供深淺色語法主題、橫向捲動，以及複製程式碼按鈕。

## 最後的想法

用一段文字收束文章：可以是結論、下一步、仍然沒有答案的問題，或希望讀者帶走的觀察。
