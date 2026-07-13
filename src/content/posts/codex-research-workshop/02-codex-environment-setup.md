---
title: Codex 課前環境準備：安裝 Git、Python、VS Code 與開發工具
description: 在開始使用 Codex 前，先替它準備 Git、Python、VS Code、Node.js 等常用工具。本篇整理 Windows 與 macOS 的安裝方式，以及研究者真正需要的最低環境需求。
publishedAt: 2026-07-13

category: Codex 教學
featured: false

seriesSlug: codex-research-workshop
seriesTitle: Codex 研究工作坊：從入門到研究實作
seriesDescription: 這個系列將帶領研究者從 Codex 的基本概念與環境安裝開始，逐步學習如何整理文獻、分析質性訪談、處理研究資料，並建立可以重複執行的 AI 研究工作流程。
seriesOrder: 2

references:
  - title: Git 官方下載與安裝說明
    url: https://git-scm.com/downloads
    note: Git 在 Windows、macOS 與 Linux 上的官方安裝入口。
  - title: Python 官方下載頁面
    url: https://www.python.org/downloads/
    note: Python 官方安裝程式與版本資訊。
  - title: Visual Studio Code 官方下載頁面
    url: https://code.visualstudio.com/download
    note: VS Code 在 Windows、macOS 與 Linux 上的官方安裝方式。
  - title: Node.js 官方下載頁面
    url: https://nodejs.org/
    note: Node.js LTS 版本的官方下載入口。
  - title: uv Installation
    url: https://docs.astral.sh/uv/getting-started/installation/
    note: uv 在 Windows、macOS 與 Linux 上的官方安裝說明。
  - title: Homebrew
    url: https://brew.sh/
    note: macOS 套件管理工具 Homebrew 的官方安裝方式。
  - title: Microsoft WinGet
    url: https://learn.microsoft.com/windows/package-manager/winget/
    note: Windows 套件管理工具 WinGet 的官方說明。
---

Codex 可以操作電腦中的檔案、終端機與開發工具，像一位工程師或研究助理一樣協助你完成工作。

不過，當 Codex 第一次使用一台電腦時，它只能操作這台電腦目前已經安裝好的工具。

例如，如果你希望 Codex：

- 分析 Excel 或 CSV
- 執行 Python 資料分析
- 建立網站
- 管理不同版本的檔案
- 產生研究報告
- 執行程式與測試

你的電腦就需要先安裝對應的執行環境與工具。

你可以把 Codex 想像成一位很聰明的研究助理，但他剛拿到一台全新的電腦。

如果電腦裡沒有 Python、Git 或程式編輯器，即使他知道該怎麼分析，也沒有工具可以實際執行。

這篇文章會介紹本課程建議安裝的基本工具，以及如何在 Windows 和 macOS 上完成安裝。

---

## 這些工具是 Codex 官方規定一定要安裝的嗎？

不一定。

Codex 在沒有額外安裝這些工具的情況下，仍然可以執行部分工作，例如：

- 閱讀文字檔
- 修改文件
- 整理資料夾
- 撰寫內容
- 分析簡單文字
- 建立 Markdown 文件
- 搜尋專案中的檔案

但如果希望 Codex 完成更完整的工作，例如執行程式、分析資料、建立網站或使用版本控制，就需要先安裝相關工具。

因此，這些工具並不是使用 Codex 的強制需求，而是用來擴充 Codex 能力的工作環境。

簡單來說：

> Codex 負責思考與執行任務，而 Git、Python、VS Code 等工具，則是它實際完成工作的工具箱。

---

## 本課程建議安裝的工具

本課程將工具分成三個層級。

### 基本安裝

建議所有參與者先完成：

1. ChatGPT 桌面 App 與 Codex
2. Git
3. Python
4. Visual Studio Code

### 建議安裝

以下工具可以讓操作更加方便：

5. Node.js
6. uv
7. GitHub Desktop

### 進階選配

之後進行較複雜任務時，可以再安裝：

8. Pandoc
9. Quarto
10. Docker Desktop
11. GitHub CLI
12. WSL 2

本次工作坊不需要全部安裝完成。

第一次參加課程時，完成基本安裝即可。

---

## 1. Git：檔案與程式的版本管理工具

Git 是一套版本控制工具。

你可以把它想像成工程師使用的進階版「復原」功能。

一般文書軟體的復原功能，通常只能退回最近幾個步驟；Git 則可以記錄每一次重要修改，讓你隨時回到之前保存的版本。

例如，當 Codex：

- 修改了錯誤的程式
- 刪除了不該刪除的內容
- 改壞了資料分析流程
- 同時修改了太多檔案
- 做出了你不喜歡的版本

你可以透過 Git 查看它修改了什麼，並回復到修改前的狀態。

Git 可以協助你：

- 記錄每一次重要修改
- 比較修改前後的差異
- 回到舊版本
- 建立不同的實驗版本
- 避免檔案被改壞後無法復原
- 與 GitHub 等平台同步
- 讓不同研究助理協作
- 保留分析流程的修改紀錄

即使你不是工程師，使用 Codex 時也非常建議理解最基本的 Git 概念。

在後續課程中，我們不一定會要求大家背誦 Git 指令，但至少需要知道：

- 目前有哪些檔案被修改
- 如何保存一個版本
- 如何查看修改差異
- 如何回復不想要的修改

---

## 2. Python：研究資料分析的執行環境

Python 是一種非常常見的程式語言。

在研究工作中，Python 經常被用來：

- 讀取 Excel 與 CSV
- 清理資料
- 分析問卷
- 處理訪談逐字稿
- 進行文字分類
- 產生統計結果
- 繪製圖表
- 處理 PDF 與 Word
- 執行自然語言分析
- 建立自動化流程
- 批次重新命名與整理檔案
- 將分析結果輸出成報告

對資訊教育、教育科技與社會科學研究者來說，Python 通常比 Node.js 更直接相關。

例如，你可以請 Codex：

> 請使用 Python 讀取 `survey.csv`，檢查缺失值、重複資料和異常值，產生資料品質報告，並將清理後的資料存成 `cleaned_survey.csv`。

如果電腦已經安裝 Python，Codex 就可以直接建立並執行這段分析流程。

如果沒有安裝 Python，Codex 仍然可以幫你撰寫程式，但無法在本機真正執行與驗證結果。

---

## 3. Visual Studio Code：查看與編輯檔案的工具

Visual Studio Code，簡稱 VS Code，是一套文字與程式編輯器。

你可以先把它想像成「給程式、資料與文字檔使用的 Word」。

VS Code 可以用來查看：

- Python 程式
- Markdown 文章
- CSV 資料
- JSON 設定檔
- 網頁程式
- Codex 修改過的內容
- Git 修改前後差異
- 專案中的資料夾結構

雖然 Codex 可以直接修改檔案，但使用者仍然需要查看它到底改了什麼。

VS Code 可以協助你：

- 開啟整個專案資料夾
- 搜尋不同檔案
- 查看程式碼
- 比較修改差異
- 使用內建終端機
- 安裝 Codex 或其他 AI 擴充功能
- 預覽 Markdown 文件
- 查看 CSV、JSON 與設定檔
- 同時開啟多個研究檔案

你不需要先學會寫程式，才可以使用 VS Code。

在本課程中，可以先把 VS Code 當成查看資料夾、檢查檔案，以及確認 Codex 工作成果的工具。

---

## 4. Node.js：網站開發與 JavaScript 執行環境

Node.js 是 JavaScript 的執行環境。

它經常用於：

- 開發網站
- 建立互動式 Dashboard
- 執行前端工具
- 安裝 JavaScript 套件
- 使用部分 AI 開發工具
- 建立資料展示頁面
- 製作研究成果網站
- 建立簡單的線上研究工具

如果你只是進行 Python 資料分析，Node.js 不一定是第一優先。

但如果課程中會示範：

- 建立研究成果網站
- 製作互動式圖表
- 建立資料儀表板
- 開發簡單研究工具
- 使用 Next.js 或 React
- 將分析結果做成可操作的網頁

就建議先安裝 Node.js。

對本次課程而言，Python 主要負責資料處理，Node.js 則主要負責網站與互動介面。

---

## 5. uv：管理 Python 環境與套件

Python 專案通常需要安裝額外套件，例如：

- `pandas`
- `openpyxl`
- `matplotlib`
- `scikit-learn`
- `nltk`
- `jupyter`

但是，不同專案可能需要不同版本的套件。

如果將所有套件都安裝在同一個環境中，可能會發生套件互相衝突，或某一個專案更新後，造成另一個專案無法執行。

uv 是一套 Python 環境與套件管理工具，可以協助：

- 安裝 Python
- 建立虛擬環境
- 安裝分析套件
- 管理不同專案的套件版本
- 避免環境互相干擾
- 提升套件安裝速度
- 記錄專案需要哪些套件
- 讓其他人比較容易重現分析環境

第一次使用時，不一定需要深入理解虛擬環境。

只需要先知道：

> 每一個研究專案最好都有自己的 Python 工作環境。

後續可以直接請 Codex 協助建立與管理這些環境。

例如：

```text
請使用 uv 為這個研究專案建立 Python 環境，並安裝 pandas、openpyxl、matplotlib 和 jupyter。
```

---

## 6. GitHub Desktop：用圖形介面操作 Git

Git 本身經常透過終端機指令操作，例如：

```bash
git status
git add .
git commit -m "Update analysis"
```

對沒有程式背景的使用者來說，這些指令一開始可能不容易理解。

GitHub Desktop 提供圖形介面，讓使用者可以：

- 查看 Codex 修改的檔案
- 比較修改前後內容
- 建立版本紀錄
- 回復部分修改
- 將專案上傳至 GitHub
- 切換不同版本
- 查看誰修改了哪些內容
- 管理不同的工作分支

Git 是核心的版本控制工具，而 GitHub Desktop 是比較容易使用的圖形介面。

因此，完全沒有 Git 經驗的參與者，可以考慮一併安裝 GitHub Desktop。

---

## 進階選配工具

以下工具不需要在第一次使用 Codex 前全部安裝，但在研究工作與軟體開發中可能非常實用。

---

## Pandoc：轉換文件格式

Pandoc 可以在不同文件格式之間進行轉換，例如：

- Markdown 轉 Word
- Markdown 轉 HTML
- Markdown 轉 PDF
- Markdown 轉簡報
- Word 轉 Markdown
- HTML 轉 Markdown
- 研究筆記轉正式文件

例如，Codex 可以先產生一份 Markdown 研究報告，再使用 Pandoc 輸出成 Word：

```bash
pandoc report.md -o report.docx
```

如果你的工作經常需要在 Markdown、Word、HTML 與 PDF 之間轉換，Pandoc 非常實用。

它也很適合搭配 Codex 使用，讓 Codex 先以結構清楚的 Markdown 撰寫內容，再轉換成研究團隊慣用的格式。

---

## Quarto：建立可重複執行的研究報告

Quarto 可以將以下內容整合在同一份文件中：

- 研究文字
- Python 程式
- 統計結果
- 圖表
- 引用資料
- 表格
- 分析說明

當資料更新時，可以重新執行整份文件，自動更新圖表與統計結果。

這種方式可以避免：

- 報告中的數字與分析結果不一致
- 修改資料後忘記更新圖表
- 不知道某張圖是怎麼產生的
- 分析流程只存在某位研究助理的電腦中
- 每次更新資料都需要手動複製貼上結果

Quarto 很適合可重複研究，但對第一次接觸 Codex 的使用者來說稍微進階，因此列為選配。

---

## Docker Desktop：建立一致的執行環境

Docker 可以把程式與執行環境包裝在一起。

它可以避免：

- 在某台電腦可以執行，換一台就不能執行
- 不同人的套件版本不一致
- 安裝太多工具污染電腦環境
- 研究助理交接後無法重現分析流程
- 部署到伺服器時產生環境差異

Docker 比較適合進階軟體開發、研究系統部署，以及多人協作的專案。

本次課程不需要預先安裝。

---

## GitHub CLI：使用指令操作 GitHub

GitHub CLI 是 GitHub 的命令列工具。

它可以讓 Codex 或使用者直接在終端機中：

- 建立 GitHub repository
- 查看 Issues
- 建立 Pull Request
- 查看專案狀態
- 操作 GitHub Actions
- 上傳與管理程式碼

它比較適合已經熟悉 Git 與 GitHub 的使用者，因此列為進階選配。

---

## WSL 2：在 Windows 中使用 Linux 環境

WSL 2 是 Windows Subsystem for Linux。

它可以讓 Windows 使用者在電腦中執行 Linux 環境。

許多開發工具、AI 套件與研究程式在 Linux 環境中比較容易安裝，因此 WSL 2 對進階使用者很有幫助。

不過，WSL 2 會增加環境複雜度。

第一次參加本課程時不需要預先安裝，先使用 Windows 原生的 PowerShell 即可。

---

# Windows 安裝方式

Windows 不一定要逐一開啟網站下載軟體。

Windows 10 或 Windows 11 通常可以使用 `winget`，透過終端機安裝常用工具。

---

## 打開 PowerShell

可以在開始選單搜尋：

```text
PowerShell
```

開啟後，就可以輸入安裝指令。

你也可以使用較新的 Windows Terminal。

---

## 確認 winget 是否可以使用

先執行：

```powershell
winget --version
```

如果有顯示版本號，就代表可以使用。

如果出現找不到指令的錯誤，可以改用各軟體的官方網站下載安裝程式。

---

## 安裝 Git

```powershell
winget install --id Git.Git -e
```

---

## 安裝 Python

```powershell
winget install --id Python.Python.3.13 -e
```

---

## 安裝 Visual Studio Code

```powershell
winget install --id Microsoft.VisualStudioCode -e
```

---

## 安裝 Node.js

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

---

## 一次依序安裝所有基本工具

可以將以下指令貼入 PowerShell：

```powershell
winget install --id Git.Git -e
winget install --id Python.Python.3.13 -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id OpenJS.NodeJS.LTS -e
```

安裝過程中，系統可能要求你同意軟體授權條款，或跳出安裝確認視窗。

安裝完成後，請關閉並重新開啟 PowerShell。

這一步很重要，因為部分安裝程式需要重新開啟終端機，才會更新系統中的指令路徑。

---

## 確認安裝是否成功

重新開啟 PowerShell 後，執行：

```powershell
git --version
python --version
node --version
npm --version
code --version
```

如果每一個指令都有顯示版本號，就代表安裝成功。

如果 `python --version` 沒有結果，可以試：

```powershell
py --version
```

部分 Windows 電腦會使用 `py` 指令啟動 Python。

---

## Windows 安裝 uv

在 PowerShell 中執行：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

安裝後，請重新開啟 PowerShell，再執行：

```powershell
uv --version
```

如果有顯示版本號，就代表 uv 已經安裝成功。

---

## Windows 安裝 GitHub Desktop

可以使用：

```powershell
winget install --id GitHub.GitHubDesktop -e
```

安裝完成後，可以在開始選單搜尋：

```text
GitHub Desktop
```

---

## 如果 Windows 沒有 winget 怎麼辦？

部分舊版 Windows、學校電腦或受管理的電腦可能沒有 `winget`，或者沒有安裝權限。

這時可以改用官方網站下載安裝程式。

請避免從不明網站下載軟體，建議只使用：

- Git 官方網站
- Python 官方網站
- Node.js 官方網站
- Visual Studio Code 官方網站
- GitHub Desktop 官方網站

如果使用學校或公司的電腦，也可能需要聯絡資訊人員取得安裝權限。

---

# macOS 安裝方式

macOS 使用者可以透過 Homebrew 快速安裝工具。

Homebrew 是 macOS 常用的套件管理工具，可以透過終端機指令安裝與更新軟體。

---

## 第一步：開啟 Terminal

可以按下：

```text
Command + Space
```

搜尋：

```text
Terminal
```

按下 Enter 後即可開啟。

---

## 第二步：安裝 Command Line Tools

在 Terminal 中輸入：

```bash
xcode-select --install
```

系統會跳出安裝視窗，依照畫面指示完成安裝。

Command Line Tools 會提供 Git、編譯工具與其他開發環境需要的基礎工具。

如果系統顯示已經安裝，就可以直接進行下一步。

---

## 第三步：安裝 Homebrew

在 Terminal 中輸入：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安裝過程可能會要求輸入 Mac 登入密碼。

輸入密碼時，Terminal 畫面不會顯示圓點或星號，這是正常現象。輸入完成後直接按下 Enter 即可。

安裝完成後，Terminal 可能會顯示額外指令，要求你將 Homebrew 加入環境變數。

請將畫面最後顯示的指令複製並執行。

如果跳過這一步，可能會看到：

```text
brew: command not found
```

完成後，可以執行：

```bash
brew --version
```

確認 Homebrew 是否安裝成功。

---

## 第四步：安裝 Git、Python、Node.js 和 VS Code

可以依序執行：

```bash
brew install git
brew install python
brew install node
brew install --cask visual-studio-code
```

也可以合併成：

```bash
brew install git python node
brew install --cask visual-studio-code
```

安裝完成後，請關閉並重新開啟 Terminal。

---

## 確認安裝是否成功

重新開啟 Terminal 後，執行：

```bash
git --version
python3 --version
node --version
npm --version
code --version
```

如果每一個指令都有顯示版本號，就代表安裝成功。

在 macOS 中，Python 通常使用：

```bash
python3
```

而不是：

```bash
python
```

因此，如果你看到教學文章使用 `python`，在 macOS 上可能需要改成 `python3`。

---

## macOS 安裝 uv

使用 Homebrew：

```bash
brew install uv
```

安裝完成後驗證：

```bash
uv --version
```

---

## macOS 安裝 GitHub Desktop

可以使用：

```bash
brew install --cask github
```

安裝完成後，可以從 Applications 資料夾開啟 GitHub Desktop。

---

# 可以直接請 AI 幫忙安裝嗎？

可以，但建議仍然保留人工確認。

目前的 AI Agent 已經可以協助操作終端機、檢查軟體版本與執行安裝指令。

例如，你可以對 Codex 說：

> 請檢查這台電腦是否已經安裝 Git、Python、Node.js 和 VS Code。如果沒有，請使用適合目前作業系統的方法安裝。執行每一個指令前先向我解釋用途，不要修改其他系統設定。

Codex 可以先執行以下檢查：

```bash
git --version
python3 --version
node --version
code --version
```

或在 Windows 上執行：

```powershell
git --version
python --version
node --version
code --version
```

如果發現工具尚未安裝，再選擇合適的安裝方式。

不過，第一次安裝時仍然建議了解基本流程，因為安裝過程可能遇到：

- 需要系統管理員權限
- 學校電腦禁止安裝
- 防毒軟體阻擋
- 網路限制
- PATH 沒有更新
- macOS 額外安全確認
- Windows 執行權限限制
- 公司或學校的軟體管理政策

比較安全的方式是：

1. 讓 AI 先檢查目前環境。
2. 讓 AI 說明準備執行的指令。
3. 確認指令來源與用途。
4. 使用者同意後再執行。
5. 安裝完成後驗證版本。
6. 不要讓 AI 任意修改未知的系統設定。

特別是看到包含以下操作的指令時，應該先停下來確認：

- 刪除大量檔案
- 修改系統權限
- 使用管理員或 `sudo`
- 修改系統環境變數
- 執行來自不明網址的腳本
- 關閉防毒或安全功能

---

# 課前最低安裝需求

如果時間有限，請至少完成以下四項：

- ChatGPT 桌面 App 與 Codex
- Git
- Python
- Visual Studio Code

Node.js 可以等到課程需要建立網站或 Dashboard 時再安裝。

完成安裝後，請確認下列指令可以正常執行。

Windows：

```powershell
git --version
python --version
code --version
```

macOS：

```bash
git --version
python3 --version
code --version
```

只要能看到版本號，就代表基本環境已經準備完成。

如果其中某一項顯示找不到指令，請先嘗試：

1. 關閉並重新開啟終端機。
2. 重新啟動電腦。
3. 確認軟體是否真的安裝完成。
4. 檢查軟體是否已加入 PATH。
5. 改用官方網站重新安裝。

---

# 建議建立一個測試資料夾

安裝完成後，可以先建立一個測試資料夾，確認 Codex 能正常操作環境。

例如建立：

```text
codex-workshop-test/
├─ README.md
├─ data/
└─ outputs/
```

接著可以請 Codex：

> 請檢查目前電腦的 Git、Python、Node.js 和 VS Code 是否可以正常使用，並將檢查結果寫入 `README.md`。請不要安裝任何新工具。

這樣可以在課程開始前確認：

- Codex 能否讀取資料夾
- Codex 能否操作終端機
- Python 是否可以執行
- Git 是否可以使用
- Codex 是否能建立與修改檔案

---

# 安裝環境的目的不是成為工程師

安裝這些工具，不代表參與者必須先學會寫程式。

真正的目的，是讓 Codex 有足夠的工具可以操作。

未來你可以使用自然語言要求 Codex：

- 清理資料
- 執行分析
- 產生圖表
- 建立研究報告
- 修改網站
- 處理多份文件
- 檢查檔案差異
- 回復錯誤修改
- 建立可重複執行的研究流程

你負責定義研究問題、分析方法與判斷標準；Codex 則協助執行重複、繁瑣與技術性的工作。

準備好這些環境之後，下一步就可以開始建立第一個 Codex 專案，讓它讀取資料夾、理解研究背景，並按照研究者設定的規則完成任務。