---
title: Git cherry-pick：把指定的 commit 帶到另一個分支
description: 理解 git cherry-pick 的用途、基本用法、衝突處理，以及什麼時候應該使用 merge 或 rebase。
publishedAt: 2026-07-15
category: 技術
featured: false
draft: true

seriesSlug: git
seriesTitle: Git 版本控制實用指南
seriesDescription: 從日常開發情境出發，理解 Git 常用指令與工作流程。
seriesOrder: 1

references:
  - title: Git cherry-pick 官方文件
    url: https://git-scm.com/docs/git-cherry-pick
    note: Git 官方對 cherry-pick 語法、選項與衝突處理的說明。
---

`git cherry-pick` 用來把某一個既有 commit 所帶來的變更，套用到目前所在的分支。

它適合處理一個很具體的情境：某個修正已經在其他分支完成，但你只想把這個修正帶過來，不想合併整個分支。

## cherry-pick 做了什麼？

假設目前有兩個分支：

```text
A---B---C  main
     \
      D---E  feature
```

如果你在 `main` 上執行：

```bash
git cherry-pick D
```

Git 會把 `D` 的變更套用到 `main`，並建立一個新的 commit：

```text
A---B---C---D'  main
     \
      D---E      feature
```

`D'` 和 `D` 的內容可能相同，但它們不是同一個 commit。因為新 commit 的父節點不同，Git 會給它新的 commit hash。

這也是 `cherry-pick` 和 `merge` 的主要差異：

- `cherry-pick`：挑選特定 commit 的變更。
- `merge`：整合另一個分支的歷史與變更。

## 基本用法

### 1. 找到要套用的 commit

先查看完整的 commit 歷史：

```bash
git log --oneline --all --decorate --graph
```

輸出可能會像這樣：

```text
* 7f3a1c2 fix: handle expired session
* 4b82e10 feat: add login page
* 91a0d44 chore: initialize project
```

通常只需要前幾碼就能指定 commit，例如 `7f3a1c2`。如果不確定這個 commit 做了什麼，可以先查看內容：

```bash
git show --stat 7f3a1c2
git show 7f3a1c2
```

### 2. 切換到目標分支

`cherry-pick` 會把變更套用到「目前所在的分支」，所以先確認分支：

```bash
git switch release
git status
```

如果工作目錄還有未提交的變更，建議先提交或暫存，避免和 cherry-pick 的內容混在一起。

### 3. 套用 commit

```bash
git cherry-pick 7f3a1c2
```

成功後，Git 會在 `release` 分支建立一個新的 commit。可以用以下指令確認：

```bash
git log -1 --oneline
git show --stat HEAD
```

## 一次套用多個 commit

如果要套用幾個指定的 commit，可以一次列出它們：

```bash
git cherry-pick 7f3a1c2 8c4d9e1
```

如果這些 commit 在同一條連續的歷史上，也可以使用範圍：

```bash
git cherry-pick 7f3a1c2^..8c4d9e1
```

這裡的 `^` 代表從第一個 commit 的父節點開始排除，因此會包含 `7f3a1c2` 到 `8c4d9e1` 之間的 commit。

使用範圍前要先確認中間沒有不想帶過來的 commit。若每個 commit 都有獨立用途，逐個套用通常比較容易檢查與處理衝突。

## 遇到衝突怎麼辦？

如果目標分支的程式碼已經和原本的分支不同，套用時可能發生衝突。Git 會暫停流程，讓你先處理衝突。

先查看狀態：

```bash
git status
```

打開衝突檔案，處理 `<<<<<<<`、`=======` 與 `>>>>>>>` 標記。確認內容後，將檔案標記為已解決：

```bash
git add path/to/file
```

所有衝突都處理完後，繼續 cherry-pick：

```bash
git cherry-pick --continue
```

如果發現這個 commit 不適合套用，可以取消整個操作，回到 cherry-pick 開始前的狀態：

```bash
git cherry-pick --abort
```

如果目前的 commit 已經沒有需要套用的內容，也可以跳過它：

```bash
git cherry-pick --skip
```

處理衝突時，不要只追求讓 Git 繼續執行。更重要的是確認合併後的程式行為仍然正確，必要時執行測試或手動檢查相關功能。

## 什麼時候適合使用？

### 把 hotfix 帶到穩定分支

某個 bug 已經在 `main` 修好，但線上版本維護在 `release`：

```bash
git switch release
git pull --ff-only
git cherry-pick <hotfix-commit>
```

這樣可以只把修正帶到 `release`，不必把 `main` 目前所有尚未發布的功能一起合併進來。

### 分享一個獨立修正

如果某個 commit 只修改一個明確問題，而且不依賴其他尚未完成的 commit，就很適合被挑選到其他分支。

### 將修正移植到多個版本

同一個錯誤可能同時存在於不同的維護分支。你可以分別在各分支 cherry-pick 同一個修正，再依照每個分支的程式碼差異處理衝突。

## 什麼時候不適合使用？

如果你想把某個分支目前的所有工作整合進來，應該考慮 `merge` 或 `rebase`，而不是逐個 cherry-pick。

以下情況也要小心：

- 目標 commit 依賴前面很多個 commit。
- 連續套用的 commit 彼此高度相關，但你只挑了其中一個。
- 同一批 commit 會被反覆 cherry-pick 到很多分支，造成歷史難以追蹤。

`cherry-pick` 解決的是「帶過一個變更」，不是「重新整理整條分支歷史」。如果兩個分支本來就應該長期同步，使用 `merge` 通常更清楚。

## 已經 cherry-pick 後想取消

如果 commit 已經推送到共用分支，通常使用 `git revert` 建立反向 commit：

```bash
git revert <cherry-picked-commit>
```

不要為了移除公開歷史而直接改寫分支。`reset` 或強制 push 可能影響其他已經拉取這個分支的人。

## 最後的想法

可以把 `cherry-pick` 想成「從另一段 Git 歷史中挑一個變更，重新在目前分支做一次」。

它很適合小而獨立的修正；當變更有許多前置依賴，或兩個分支本來就要完整整合時，`merge` 或 `rebase` 會是更合適的工具。
