---
title: 安裝 Codex 並建立第一個專案
description: 完成 ChatGPT 桌面 App 的下載與安裝，認識 Chat、Work、Codex 三種模式，並建立第一個 Codex 專案資料夾。
publishedAt: 2026-07-13

category: Codex 教學
featured: false

seriesSlug: codex-research-workshop
seriesTitle: Codex 研究工作坊：從入門到研究實作
seriesDescription: 這個系列將帶領研究者從 Codex 的基本概念與環境安裝開始，逐步學習如何整理文獻、分析質性訪談、處理研究資料，並建立可以重複執行的 AI 研究工作流程。
seriesOrder: 3

references:
  - title: Codex 官方網站
    url: https://openai.com/codex/
    note: Codex 桌面 App 的介紹與下載入口。
  - title: Moving to the new ChatGPT desktop app
    url: https://help.openai.com/en/articles/20001276
    note: 說明新版 ChatGPT 桌面 App 如何整合 Chat、Work 與 Codex。
  - title: ChatGPT Work and Codex
    url: https://help.openai.com/en/articles/20001275
    note: 說明 Chat、Work、Codex 的功能差異、支援平台與專案使用方式。
  - title: Get started with Codex
    url: https://openai.com/codex/get-started/
    note: OpenAI 官方提供的 Codex 入門步驟。
---

# 安裝 Codex 並建立第一個專案

本篇會以 Windows 作為操作示範，帶你完成以下步驟：

1. 下載並安裝 ChatGPT 桌面 App。
2. 登入 ChatGPT 帳號。
3. 認識 Chat、Work 與 Codex。
4. 建立第一個 Codex 專案。
5. 確認目前對話屬於哪一個專案。

---

## 下載 ChatGPT 桌面 App

請前往 Codex 官方網站：

[下載 Codex](https://openai.com/codex/)

點擊下載按鈕後，瀏覽器會下載安裝程式。

在 Windows 中，安裝檔名稱可能類似：

```text
ChatGPT Installer.exe
```

開啟檔案總管，進入「下載」資料夾，找到安裝程式後雙擊執行。



安裝程式可能會將你帶到 Microsoft Store，接著由 Microsoft Store 自動下載並安裝 ChatGPT 桌面 App。

安裝完成後，從 Windows 開始選單搜尋：

```text
ChatGPT
```

開啟應用程式。

---

## 登入 ChatGPT 帳號

開啟 App 後，使用你的 ChatGPT 帳號登入。

你可以使用：

- Email
- Google 帳號
- Microsoft 帳號
- Apple 帳號
- 其他畫面提供的登入方式

建議使用自己平常訂閱 ChatGPT 的帳號，這樣才能套用該帳號目前可使用的方案、額度與功能。

---

## 完成初始設定

第一次登入時，系統可能會詢問你的工作內容與平常使用情境。

例如：

- 你通常使用 ChatGPT 完成哪些任務？
- 你的工作或研究領域是什麼？
- 你希望 ChatGPT 如何協助你？
- 你比較常進行研究、寫作還是程式開發？

根據自己的實際情況填答即可。

這些問題主要用來了解你的使用情境，不需要填寫得非常正式。

---

## 暫時略過 Plugin 安裝

完成初始問題後，系統可能會推薦一些 Plugin。

Plugin 可以讓 ChatGPT 或 Codex 連接不同工具，或加入特定工作流程。

例如：

- Google Drive
- Gmail
- GitHub
- Canva
- 資料分析工具
- 軟體開發工具

這些 Plugin 之後仍然可以重新安裝，因此本次課程先點擊畫面下方的：

```text
Skip
```

先完成基本介面與專案設定。


---

## 新版 ChatGPT 桌面 App

新版 ChatGPT 桌面 App 將以下三種工作方式整合在同一個應用程式中：

- Chat
- ChatGPT Work
- Codex

如果你原本已經安裝 Codex App，更新後可能會變成新版 ChatGPT 桌面 App，原有的 Codex 任務與專案通常會保留。

部分功能仍在逐步推出。如果你的帳號沒有看到 ChatGPT Work，可能代表目前尚未開放到你的帳號或工作區。

---

## Chat、Work 和 Codex 的差別

### Chat

適合快速的對話型任務，例如：

- 詢問問題
- 解釋觀念
- 搜尋資料
- 腦力激盪
- 修改一小段文字
- 進行一般對話

在桌面 App 中，可以透過左側的 Quick chat 開啟一般 Chat 對話。

### ChatGPT Work

Work 適合較長、需要完整成果的工作，例如：

- 研究一個主題
- 分析資料
- 整理多份文件
- 製作報告
- 建立試算表
- 製作簡報
- 建立網站或其他可交付成果

Work 更重視任務最後要產生的成果。

對研究者來說，Work 適合：

- 整理文獻
- 分析研究資料
- 撰寫研究報告
- 製作圖表與簡報
- 處理跨文件工作

### Codex

Codex 主要面向軟體開發與技術工作，例如：

- 撰寫程式
- 修改程式碼
- 操作終端機
- 執行測試
- 修正錯誤
- 查看 Git 變更
- 操作程式碼 repository
- 建立資料處理程式

Codex 的介面會更強調：

- 程式碼
- 修改前後差異
- 終端機指令
- Git 狀態
- 開發工具
- 專案檔案

簡單來說：

| 模式 | 適合情境 |
|---|---|
| Chat | 快速問答、討論與腦力激盪 |
| Work | 研究、資料分析與完成正式成果 |
| Codex | 程式開發、技術工作與操作 repository |

Work 和 Codex 的能力有不少重疊。

主要差異在於介面設計與預設工作方向：

- Work 著重完成研究、分析與正式成果。
- Codex 著重程式碼、終端機與軟體開發流程。

本課程會以 Codex 為主要示範工具，因為我們希望它能直接操作研究資料夾、執行 Python、查看檔案變更，並建立可重複執行的分析流程。

---

## 切換 Work 和 Codex

在桌面 App 左上角，可以看到目前使用的模式。

點擊模式名稱，即可在以下模式之間切換：

```text
ChatGPT Work
ChatGPT Codex
```


一般 Chat 不一定會顯示在相同的模式切換位置。

若要開啟一般對話，可以點擊左側導覽列中的 Quick chat。

---

# 建立第一個 Codex 專案

在 Codex 中，一個資料夾通常代表一個專案。

例如，以下工作可以各自建立一個資料夾：

```text
interview-analysis/
literature-review/
survey-data-analysis/
course-website/
research-dashboard/
```

Codex 會優先讀取目前專案資料夾中的內容。

因此，建議將同一個研究專案的相關資料放在同一個資料夾中，例如：

```text
interview-analysis/
├─ README.md
├─ codebook.md
├─ transcripts/
├─ analysis/
└─ outputs/
```

這樣 Codex 比較容易理解：

- 這個專案要做什麼
- 原始資料放在哪裡
- 分析規則是什麼
- 程式應該放在哪裡
- 結果應該輸出到哪裡

---

## 方法一：從零開始建立專案

在左側專案區域點擊加號：

```text
+
```

接著選擇從零開始建立專案。

Codex 會替你建立一個新的專案資料夾。預設位置通常會在目前使用者的文件資料夾或 App 指定的位置。

建立完成後，可以在 Windows 檔案總管中找到這個資料夾。


這種方式適合：

- 還沒有任何資料
- 想建立全新的研究專案
- 希望 Codex 協助規劃資料夾結構
- 想從空白專案開始練習

---

## 方法二：開啟現有資料夾

如果電腦中已經有研究資料，可以選擇開啟現有資料夾。

例如，你已經有：

```text
teacher-interview-project/
├─ interview-01.docx
├─ interview-02.docx
├─ interview-03.docx
└─ codebook.xlsx
```

就可以直接讓 Codex 開啟 `teacher-interview-project` 資料夾。

選擇現有資料夾後，Windows 會開啟資料夾選擇視窗。

找到目標資料夾並確認，Codex 就會將它加入左側專案列表。

這種方式適合：

- 已經有研究資料
- 已經建立程式專案
- 想繼續處理既有工作
- 想讓 Codex 協助整理現有資料夾

---

## 不要一次開放整台電腦

建議只讓 Codex 存取完成任務所需的資料夾。

例如，要分析訪談資料時，可以開啟：

```text
interview-analysis/
```

不要直接開啟：

```text
C:\
```

也不要直接把整個使用者資料夾當成一個專案。

較小且明確的專案範圍可以：

- 降低誤改其他檔案的風險
- 避免讀取無關資料
- 幫助 Codex理解任務背景
- 減少搜尋檔案所需時間
- 更容易使用 Git 管理版本

---

# 專案中的對話

每一個專案都可以包含多個對話。

例如，在「訪談分析」專案中，可以分別建立：

```text
建立 codebook
整理逐字稿格式
執行第一輪編碼
檢查低信心分類
產生研究結果圖表
```

不同對話可以處理不同任務，但它們仍然屬於同一個專案資料夾。

這樣可以避免將所有工作塞進同一個超長對話中。

---

## 在專案中建立對話

在左側專案名稱旁，可以看到建立新對話的按鈕。

點擊後，Codex 會在該專案中開啟一個新對話。

建立後，可以直接輸入任務，例如：

> 請先檢查這個資料夾中的所有檔案，說明每個檔案的用途。暫時不要修改任何內容。

這是一個適合第一次開啟專案時使用的安全提示詞。

---

## 確認目前對話屬於哪個專案

當你同時建立很多專案與對話後，可能會忘記目前正在操作哪個資料夾。

可以查看對話輸入框上方或介面頂部顯示的專案資料夾名稱。


在送出任務前，建議先確認：

- 目前開啟的是正確專案
- Codex 可以存取的資料夾是否正確
- 任務是否可能修改檔案
- 原始資料是否已有備份

避免在錯誤的專案中執行修改指令。

---

# 任務的三種常見狀態

Codex 執行任務時，通常會看到以下幾種狀態。

## 進行中

代表 Codex 正在：

- 閱讀檔案
- 規劃工作
- 撰寫程式
- 執行指令
- 分析資料
- 產生結果

你可以查看目前進度，必要時也可以補充指令或要求它調整方向。

## 等待批准

代表 Codex 準備執行需要使用者確認的操作。

例如：

- 執行特定終端機指令
- 安裝套件
- 存取額外資料
- 使用外部工具
- 進行可能影響系統的操作

批准前，應該先閱讀：

- 它準備執行什麼
- 為什麼要執行
- 會影響哪些檔案
- 是否會連接外部服務
- 是否涉及刪除或覆寫

不確定時，可以先拒絕，並要求 Codex 解釋。

## 完成

代表 Codex 已完成目前任務。

完成後不要只看「完成」狀態，也要檢查：

- 修改了哪些檔案
- 是否產生預期成果
- 終端機是否出現錯誤
- 分析結果是否合理
- 原始資料是否保持不變
- 是否還有需要人工確認的項目

---

# 第一個練習任務

建立或開啟一個測試資料夾後，可以輸入：

> 請先閱讀目前資料夾的內容，告訴我有哪些檔案，以及你認為這個專案可能是做什麼的。暫時不要建立、修改、移動或刪除任何檔案。

這個提示詞有三個重點：

1. 先讓 Codex 了解專案。
2. 明確要求它暫時不要修改。
3. 檢查它是否正確理解資料夾內容。

確認沒有問題後，再輸入：

> 請幫我建立一份 `README.md`，說明這個專案的目的、目前檔案與建議的下一步。建立前先告訴我你準備寫入哪些內容。

完成後，可以查看：

- Codex 是否建立了 `README.md`
- 文件內容是否正確
- 是否修改了其他不相關檔案
- 專案狀態是否顯示為完成

---

# 小結

本篇完成了三件事情：

1. 安裝並登入 ChatGPT 桌面 App。
2. 認識 Chat、Work 與 Codex 的差異。
3. 建立 Codex 專案並開啟第一個對話。

請記住：

> 在 Codex 中，資料夾不只是存放檔案的位置，也是 AI 理解專案背景的重要範圍。

將同一個研究專案的資料、規則與輸出放在清楚的資料夾中，可以讓 Codex 更容易理解任務，也能降低誤改其他檔案的風險。

下一篇將介紹 Codex 的基本操作方式，包括如何撰寫第一個任務、查看執行計畫、批准指令，以及檢查 Codex 修改了哪些內容。