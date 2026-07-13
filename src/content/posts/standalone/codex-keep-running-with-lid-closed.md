---
title: 讓 Mac 與 Windows 關上螢幕後繼續執行 Codex
description: 使用 macOS 的 caffeinate 與 Windows 的 powercfg，讓 Codex 在螢幕關閉後繼續工作。
publishedAt: 2026-07-13
category: Codex 教學
featured: false
draft: false

references:
  - title: Apple Terminal User Guide：執行指令
    url: https://support.apple.com/guide/terminal/execute-commands-and-run-tools-apdb66b5242-0d18-49fc-9c47-a2498b7c91d5/mac
    note: macOS Terminal 的基本使用方式與中止指令的方法。
  - title: Apple Support：闔蓋使用 Mac
    url: https://support.apple.com/en-la/102282
    note: 說明 Mac 闔蓋模式對外接螢幕、滑鼠與鍵盤的要求。
  - title: Microsoft Learn：Powercfg command-line options
    url: https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options
    note: powercfg 電源設定指令的官方說明。
  - title: Microsoft Learn：Lid switch close action
    url: https://learn.microsoft.com/en-us/windows-hardware/customize/power-settings/power-button-and-lid-settings-lid-switch-close-action
    note: Windows 闔蓋動作與 Do Nothing 設定值的官方說明。
---

# 讓 Mac 與 Windows 關上螢幕後繼續執行 Codex

如果 Codex 正在執行需要等待的任務，直接闔上筆電可能會讓電腦進入睡眠，工作也就暫停了。以下設定可以讓電腦在螢幕關閉後繼續運作。

先分清楚兩件事：只讓螢幕熄滅，和直接闔上筆電上蓋，不一定是同一件事。`caffeinate` 可以防止 macOS 因閒置而睡眠；但 Mac 闔蓋後能否繼續運作，還要符合闔蓋模式的硬體條件。長時間執行時，兩種系統都建議接上電源。

## macOS：使用 caffeinate

### 開啟 Terminal

按 `Command + Space` 開啟 Spotlight，搜尋 `Terminal` 後按 Return。也可以在 Finder 的「應用程式 → 工具程式」中開啟 Terminal。

### 讓 Mac 保持醒著

在 Terminal 貼上以下指令並按 Return：

```bash
caffeinate -dims
```

執行後讓這個 Terminal 視窗保持開啟，再啟動 Codex。這個指令會阻止顯示器、系統與磁碟因閒置而進入睡眠；要停止時按 `Control + C`。

如果你使用的是 Codex CLI，也可以直接把它接在 `caffeinate` 後面：

```bash
caffeinate -dims codex
```

## Windows：使用 powercfg

### 開啟 Windows Terminal

按 Windows 鍵，搜尋 `Terminal` 或 `PowerShell`，按 Enter 開啟。Windows 10 也可以搜尋並開啟「命令提示字元」。

### 設定接上電源時闔蓋不睡眠

把以下三行完整貼上並按 Enter：

```powershell
powercfg /setacvalueindex SCHEME_CURRENT SUB_BUTTONS LIDACTION 0
powercfg /change standby-timeout-ac 0
powercfg /setactive SCHEME_CURRENT
```

這會在「接上電源」時，將闔蓋動作設為「不進行動作」，並停用 AC 電源下的自動睡眠。接著就可以啟動 Codex，再闔上筆電上蓋。

Windows 的 `powercfg` 會修改目前的電源計畫。如果之後不需要長時間執行，建議到「控制台 → 電源選項 → 選擇闔上筆電上蓋時的行為」改回原本設定，並重新設定你習慣的自動睡眠時間。

## 最後確認

開始長時間任務前，先確認 Codex 沒有要求你互動輸入，並且電腦已接上穩定電源。`caffeinate` 或 `powercfg` 只能避免電腦睡眠，不能保證網路、權限或 Codex 任務本身不會中斷。
