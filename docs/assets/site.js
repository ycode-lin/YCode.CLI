const copyButton = document.querySelector("#copy-command");
const installCommand = document.querySelector("#install-command");
const year = document.querySelector("#year");
const typedTerminal = document.querySelector("#typed-terminal");
const metaDescription = document.querySelector("#meta-description");
const languageButtons = document.querySelectorAll(".lang-button");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nHtmlNodes = document.querySelectorAll("[data-i18n-html]");
const i18nAltNodes = document.querySelectorAll("[data-i18n-alt]");
const i18nAriaNodes = document.querySelectorAll("[data-i18n-aria-label]");
const prefersReducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const storageKey = "ycode-pages-lang";

const translations = {
  zh: {
    "meta.title": "YCode CLI | 终端原生 AI 编码代理",
    "meta.description": "YCode CLI 是一个终端原生的 AI 编码代理，专为真实仓库工作流设计，具备子代理编排、MCP 工具接入、记忆层和技能包加载能力。",
    "brand.aria": "YCode CLI 仓库",
    "brand.alt": "YCode CLI 图标",
    "brand.tagline": "终端原生编码代理",
    "topbar.statusAria": "当前运行状态",
    "topbar.status": "主分支在线 / NuGet 已发布 / Pages 已同步 / Runtime 正在运行",
    "nav.install": "安装",
    "nav.releases": "版本",
    "nav.source": "源码",
    "hero.eyebrow": "MISSION CONSOLE",
    "hero.title": "给你的仓库一块真正可操作的 <span>AI 终端甲板</span>。",
    "hero.body": "YCode CLI 不是把聊天框搬进命令行，而是把探索、规划、改码、发布接到一条能持续运行的仓库操作链路里。",
    "hero.strip1": "子代理路由",
    "hero.strip2": "MCP 工具面",
    "hero.strip3": "记忆层",
    "hero.strip4": "技能包",
    "hero.install": "立即安装",
    "hero.release": "查看最新版本",
    "hero.commandLabel": "bootstrap",
    "hero.stat1Label": "运行模型",
    "hero.stat1Value": "Explore / Plan / Code",
    "hero.stat1Body": "把仓库工作拆进更清晰的执行轨道。",
    "hero.stat2Label": "能力面",
    "hero.stat2Value": "Files / Tasks / MCP",
    "hero.stat2Body": "从命令到动作，不停留在提示词层面。",
    "terminal.title": "live ops / ycode runtime",
    "terminal.prelude1": "$ ycode \"检查仓库、补丁 workflow、发包、更新站点\"",
    "terminal.prelude2": "[runtime] 正在恢复上下文、挂载工具链、准备执行序列",
    "ops.streamLabel": "release stream",
    "ops.streamState": "热",
    "ops.item1Key": "包仓",
    "ops.item1Value": "NuGet.org",
    "ops.item2Key": "镜像",
    "ops.item2Value": "GitHub Packages",
    "ops.item3Key": "部署",
    "ops.item3Value": "Pages Auto Deploy",
    "telemetry.eyebrow": "runtime telemetry",
    "telemetry.active": "运行中",
    "telemetry.agent": "代理切换",
    "telemetry.tool": "工具执行",
    "telemetry.memory": "记忆召回",
    "systems.eyebrow": "system lanes",
    "systems.title": "把仓库里的关键动作排成一条能连贯推进的控制面。",
    "systems.lane1Title": "发现层",
    "systems.lane1Body": "扫描代码树、workflow、tags、packages，把现状提炼成可决策的仓库图谱。",
    "systems.lane2Title": "规划层",
    "systems.lane2Body": "把多步任务拆成块，让自动化、文档、UI、发布链路能协同演进。",
    "systems.lane3Title": "执行层",
    "systems.lane3Body": "直接编辑文件、调用工具、打标签、发版，而不是停在分析报告里。",
    "systems.sideBadge": "agent stack",
    "systems.cell1Label": "route",
    "systems.cell1Value": "Subagents",
    "systems.cell2Label": "extend",
    "systems.cell2Value": "MCP",
    "systems.cell3Label": "retain",
    "systems.cell3Value": "Memory",
    "systems.cell4Label": "repeat",
    "systems.cell4Value": "Skills",
    "systems.sideBody": "你得到的不是“会回答问题”的模型，而是一套更像工程控制面的终端执行器。",
    "workflow.eyebrow": "command scenarios",
    "workflow.title": "直接从命令行发起真正的仓库任务。",
    "workflow.card1Tag": "release",
    "workflow.command1": "ycode \"检查仓库并起草发版计划\"",
    "workflow.card1Body": "先拉出当前版本状态、Secrets、workflow 风险点，再决定下一步。",
    "workflow.card2Tag": "ship",
    "workflow.command2": "ycode \"接好 GitHub Actions 并发布到 nuget.org\"",
    "workflow.card2Body": "自动化链路、包元数据、tag 发布和 release 资产可以一次串起来。",
    "workflow.card3Tag": "design",
    "workflow.command3": "ycode \"把 pages 门户优化成终端化体验\"",
    "workflow.card3Body": "前端也能走同一套工作流，不用跳出仓库换上下文。",
    "launch.installEyebrow": "install node",
    "launch.installTitle": "NuGet 包",
    "launch.installBody": "安装全局工具，查看版本、依赖和发布记录。",
    "launch.releaseEyebrow": "artifact log",
    "launch.releaseTitle": "Releases",
    "launch.releaseBody": "追踪 tag、release 资产和每次自动发布的交付结果。",
    "launch.sourceEyebrow": "source graph",
    "launch.sourceTitle": "源码仓库",
    "launch.sourceBody": "查看实现细节、问题修复和工作流演进过程。",
    "launch.mirrorEyebrow": "mirror registry",
    "launch.mirrorTitle": "GitHub Packages",
    "launch.mirrorBody": "查看与 release workflow 同步的镜像包仓。",
    "launch.open": "打开入口",
    "chart.eyebrow": "public signal",
    "chart.title": "仓库增长曲线不是装饰，它是终端系统被持续使用的外部回声。",
    "chart.alt": "YCode CLI 的 Star History 图表",
    "footer.left": "终端优先、自动化驱动、真正理解仓库上下文。",
    "copy.default": "复制",
    "copy.success": "已复制",
    "copy.failure": "复制失败"
  },
  en: {
    "meta.title": "YCode CLI | Terminal-Native AI Coding Agent",
    "meta.description": "YCode CLI is a terminal-native AI coding agent built for real repository workflows, with subagent orchestration, MCP tools, memory layers, and skill loading.",
    "brand.aria": "YCode CLI repository",
    "brand.alt": "YCode CLI icon",
    "brand.tagline": "terminal-native coding agent",
    "topbar.statusAria": "Current runtime status",
    "topbar.status": "main branch online / NuGet published / Pages synced / runtime active",
    "nav.install": "Install",
    "nav.releases": "Releases",
    "nav.source": "Source",
    "hero.eyebrow": "MISSION CONSOLE",
    "hero.title": "Turn your repository into an <span>AI operations deck</span>, not another chat box.",
    "hero.body": "YCode CLI does not just move chat into a shell. It connects exploration, planning, patching, and shipping into one durable repository workflow.",
    "hero.strip1": "Subagent Routing",
    "hero.strip2": "MCP Surfaces",
    "hero.strip3": "Memory Layers",
    "hero.strip4": "Skill Packs",
    "hero.install": "Install Now",
    "hero.release": "Open Latest Release",
    "hero.commandLabel": "bootstrap",
    "hero.stat1Label": "Execution Model",
    "hero.stat1Value": "Explore / Plan / Code",
    "hero.stat1Body": "Repository work runs across clearer execution lanes.",
    "hero.stat2Label": "Tool Surface",
    "hero.stat2Value": "Files / Tasks / MCP",
    "hero.stat2Body": "Commands turn into structured actions, not prompt theater.",
    "terminal.title": "live ops / ycode runtime",
    "terminal.prelude1": "$ ycode \"inspect repo, patch workflow, publish package, refresh pages\"",
    "terminal.prelude2": "[runtime] restoring context, mounting tools, preparing execution sequence",
    "ops.streamLabel": "release stream",
    "ops.streamState": "hot",
    "ops.item1Key": "registry",
    "ops.item1Value": "NuGet.org",
    "ops.item2Key": "mirror",
    "ops.item2Value": "GitHub Packages",
    "ops.item3Key": "deploy",
    "ops.item3Value": "Pages Auto Deploy",
    "telemetry.eyebrow": "runtime telemetry",
    "telemetry.active": "active",
    "telemetry.agent": "agent switch",
    "telemetry.tool": "tool execution",
    "telemetry.memory": "memory recall",
    "systems.eyebrow": "system lanes",
    "systems.title": "Arrange repository-critical actions into one control surface that can keep moving forward.",
    "systems.lane1Title": "Discovery Layer",
    "systems.lane1Body": "Scan code trees, workflows, tags, and packages to build a decision-ready repo graph.",
    "systems.lane2Title": "Planning Layer",
    "systems.lane2Body": "Split multi-step work into blocks so automation, docs, UI, and release flow can evolve together.",
    "systems.lane3Title": "Execution Layer",
    "systems.lane3Body": "Edit files, call tools, tag releases, and ship instead of stopping at analysis.",
    "systems.sideBadge": "agent stack",
    "systems.cell1Label": "route",
    "systems.cell1Value": "Subagents",
    "systems.cell2Label": "extend",
    "systems.cell2Value": "MCP",
    "systems.cell3Label": "retain",
    "systems.cell3Value": "Memory",
    "systems.cell4Label": "repeat",
    "systems.cell4Value": "Skills",
    "systems.sideBody": "What you get is not a model that merely answers. It is a terminal executor shaped like an engineering control surface.",
    "workflow.eyebrow": "command scenarios",
    "workflow.title": "Launch real repository tasks directly from the terminal.",
    "workflow.card1Tag": "release",
    "workflow.command1": "ycode \"inspect the repo and draft a release plan\"",
    "workflow.card1Body": "Pull current version state, secrets, and workflow risks before choosing the next move.",
    "workflow.card2Tag": "ship",
    "workflow.command2": "ycode \"wire GitHub Actions and publish to nuget.org\"",
    "workflow.card2Body": "Automation, package metadata, tags, and release artifacts can be chained in one pass.",
    "workflow.card3Tag": "design",
    "workflow.command3": "ycode \"optimize the pages portal with terminal UX\"",
    "workflow.card3Body": "Frontend work can run through the same workflow without breaking repository context.",
    "launch.installEyebrow": "install node",
    "launch.installTitle": "NuGet Package",
    "launch.installBody": "Install globally and inspect versions, dependencies, and release history.",
    "launch.releaseEyebrow": "artifact log",
    "launch.releaseTitle": "Releases",
    "launch.releaseBody": "Track tags, release assets, and every automated delivery run.",
    "launch.sourceEyebrow": "source graph",
    "launch.sourceTitle": "Repository",
    "launch.sourceBody": "Review implementation details, fixes, and workflow evolution.",
    "launch.mirrorEyebrow": "mirror registry",
    "launch.mirrorTitle": "GitHub Packages",
    "launch.mirrorBody": "Inspect the mirrored registry published from the release workflow.",
    "launch.open": "Open",
    "chart.eyebrow": "public signal",
    "chart.title": "The growth curve is not decoration. It is the external echo of a terminal system people keep using.",
    "chart.alt": "Star History chart for YCode CLI",
    "footer.left": "Terminal-first, automation-heavy, repository-aware.",
    "copy.default": "Copy",
    "copy.success": "Copied",
    "copy.failure": "Copy failed"
  }
};

const terminalSessions = {
  zh: [
    [
      { text: "> explore: 仓库扫描完成 / 已识别 dotnet tool 项目与发布链路", className: "comment" },
      { text: "> tool: 已加载 package metadata、release tags、workflow 状态", className: "tool" },
      { text: "assistant: 当前仓库适合直接作为 CLI 产品来迭代，而不是停留在脚本集合。", className: "assistant" },
      { text: "assistant: 下一步建议同时推进包发布、门户设计和终端体验的统一叙事。", className: "assistant" }
    ],
    [
      { text: "> plan: 重构 pages 门户 / 保持自动部署 / 默认中文双语", className: "comment" },
      { text: "> tool: 正在编辑 docs/index.html、docs/assets/site.css、docs/assets/site.js", className: "tool" },
      { text: "assistant: 门户正在切换成更强的指挥台结构，强调 runtime、signal 和 command surface。", className: "assistant" },
      { text: "assistant: 语言切换会同步主标题、按钮、终端打字和元信息。", className: "assistant" }
    ],
    [
      { text: "> ship: NuGet 在线 / GitHub Packages 镜像 / Pages 已部署", className: "comment" },
      { text: "> memory: profile + daily + project context restored", className: "tool" },
      { text: "assistant: 运行时健康。现在更像一套可操作的工程控制面，而不是产品说明页。", className: "assistant" },
      { text: "assistant: 等待下一条终端命令。", className: "assistant" }
    ]
  ],
  en: [
    [
      { text: "> explore: repo scan complete / dotnet tool project and release flow detected", className: "comment" },
      { text: "> tool: loaded package metadata, release tags, and workflow status", className: "tool" },
      { text: "assistant: This repository is ready to behave like a product-grade CLI, not just a pile of scripts.", className: "assistant" },
      { text: "assistant: The next move is to unify package delivery, portal design, and terminal experience into one story.", className: "assistant" }
    ],
    [
      { text: "> plan: rebuild pages portal / preserve auto deploy / keep bilingual default in zh", className: "comment" },
      { text: "> tool: editing docs/index.html, docs/assets/site.css, docs/assets/site.js", className: "tool" },
      { text: "assistant: The portal is shifting into a control-deck layout centered on runtime, signal, and command surface.", className: "assistant" },
      { text: "assistant: Language switching will update headings, buttons, terminal typing, and metadata together.", className: "assistant" }
    ],
    [
      { text: "> ship: NuGet online / GitHub Packages mirrored / Pages deployed", className: "comment" },
      { text: "> memory: profile + daily + project context restored", className: "tool" },
      { text: "assistant: Runtime healthy. This now feels closer to an engineering control surface than a generic product page.", className: "assistant" },
      { text: "assistant: Ready for the next terminal command.", className: "assistant" }
    ]
  ]
};

let currentLanguage = readStoredLanguage();
let terminalRunId = 0;
let copyResetTimer = null;

function readStoredLanguage() {
  try {
    return localStorage.getItem(storageKey) === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function writeStoredLanguage(language) {
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // Ignore storage failures.
  }
}

function t(key, language = currentLanguage) {
  return translations[language]?.[key] ?? translations.zh[key] ?? key;
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function setCopyButtonLabel(key) {
  if (!copyButton) return;
  copyButton.textContent = t(key);
}

function applyTranslations(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = t("meta.title", language);

  if (metaDescription) {
    metaDescription.setAttribute("content", t("meta.description", language));
  }

  i18nNodes.forEach((node) => {
    node.textContent = t(node.dataset.i18n, language);
  });

  i18nHtmlNodes.forEach((node) => {
    node.innerHTML = t(node.dataset.i18nHtml, language);
  });

  i18nAltNodes.forEach((node) => {
    node.setAttribute("alt", t(node.dataset.i18nAlt, language));
  });

  i18nAriaNodes.forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel, language));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (copyResetTimer) {
    window.clearTimeout(copyResetTimer);
    copyResetTimer = null;
  }

  setCopyButtonLabel("copy.default");
}

function getCurrentSessions() {
  return terminalSessions[currentLanguage] ?? terminalSessions.zh;
}

function renderSessionMarkup(session) {
  return session
    .map((frame) => `<span class="line ${frame.className}">${frame.text}</span>`)
    .join("");
}

function renderStaticTerminal(sessionIndex, runId) {
  if (!typedTerminal || runId !== terminalRunId) return;
  const sessions = getCurrentSessions();
  typedTerminal.innerHTML = `${renderSessionMarkup(sessions[sessionIndex])}<span class="cursor" aria-hidden="true"></span>`;
}

async function playReducedMotionLoop(runId) {
  if (!typedTerminal) return;

  let index = 0;
  renderStaticTerminal(index, runId);

  while (runId === terminalRunId) {
    await delay(2600);
    if (runId !== terminalRunId) return;

    typedTerminal.classList.add("is-switching");
    await delay(220);
    if (runId !== terminalRunId) return;

    index = (index + 1) % getCurrentSessions().length;
    renderStaticTerminal(index, runId);
    typedTerminal.classList.remove("is-switching");
  }
}

async function typeLine(line, text, runId) {
  for (const character of text) {
    if (runId !== terminalRunId) return false;
    line.textContent += character;
    await delay(15);
  }

  return true;
}

async function eraseLine(line, runId) {
  while (line.textContent.length > 0) {
    if (runId !== terminalRunId) return false;
    line.textContent = line.textContent.slice(0, -1);
    await delay(8);
  }

  return true;
}

async function playTerminalLoop(runId) {
  if (!typedTerminal) return;

  if (prefersReducedMotionQuery.matches) {
    await playReducedMotionLoop(runId);
    return;
  }

  while (runId === terminalRunId) {
    for (const session of getCurrentSessions()) {
      if (runId !== terminalRunId) return;

      typedTerminal.innerHTML = "";
      const lines = [];

      for (const frame of session) {
        const line = document.createElement("span");
        line.className = `line ${frame.className}`;
        typedTerminal.appendChild(line);
        lines.push(line);

        const completed = await typeLine(line, frame.text, runId);
        if (!completed) return;
        await delay(110);
      }

      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.setAttribute("aria-hidden", "true");
      typedTerminal.appendChild(cursor);

      await delay(980);
      if (runId !== terminalRunId) return;

      cursor.remove();

      for (let index = lines.length - 1; index >= 0; index -= 1) {
        const completed = await eraseLine(lines[index], runId);
        if (!completed) return;
        lines[index].remove();
        await delay(38);
      }

      typedTerminal.classList.add("is-switching");
      await delay(150);
      typedTerminal.classList.remove("is-switching");
    }
  }
}

function restartTerminal() {
  if (!typedTerminal) return;

  terminalRunId += 1;
  typedTerminal.innerHTML = "";
  typedTerminal.classList.remove("is-switching");
  void playTerminalLoop(terminalRunId);
}

function setLanguage(language) {
  if (language !== "zh" && language !== "en") return;

  applyTranslations(language);
  writeStoredLanguage(language);
  restartTerminal();
}

if (copyButton && installCommand) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(installCommand.textContent.trim());
      setCopyButtonLabel("copy.success");
    } catch {
      setCopyButtonLabel("copy.failure");
    }

    if (copyResetTimer) {
      window.clearTimeout(copyResetTimer);
    }

    copyResetTimer = window.setTimeout(() => {
      setCopyButtonLabel("copy.default");
      copyResetTimer = null;
    }, 1600);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (typeof prefersReducedMotionQuery.addEventListener === "function") {
  prefersReducedMotionQuery.addEventListener("change", restartTerminal);
}

applyTranslations(currentLanguage);
restartTerminal();
