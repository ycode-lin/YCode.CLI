const copyButton = document.querySelector("#copy-command");
const installCommand = document.querySelector("#install-command");
const year = document.querySelector("#year");
const typedTerminal = document.querySelector("#typed-terminal");
const metaDescription = document.querySelector("#meta-description");
const languageButtons = document.querySelectorAll(".lang-button");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nAltNodes = document.querySelectorAll("[data-i18n-alt]");
const i18nAriaNodes = document.querySelectorAll("[data-i18n-aria-label]");
const prefersReducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const storageKey = "ycode-pages-lang";

const translations = {
  zh: {
    "meta.title": "YCode CLI | 终端原生 AI 编码代理",
    "meta.description": "YCode CLI 是一个终端原生的 AI 编码代理，具备子代理编排、MCP 工具接入、记忆层和技能包加载能力。",
    "brand.aria": "YCode CLI 仓库",
    "brand.alt": "YCode CLI 图标",
    "brand.tagline": "终端原生编码代理",
    "topbar.statusAria": "当前发布状态",
    "topbar.status": "发布通道：v1.0.5 / NuGet 在线 / Pages 已同步",
    "nav.nuget": "NuGet",
    "nav.releases": "发布记录",
    "nav.source": "源码仓库",
    "hero.eyebrow": "cli 门户 / 编排 / agent runtime",
    "hero.title": "把代码操作成一套正在运行的终端系统，而不是静态聊天框。",
    "hero.body": "YCode CLI 面向真实仓库工作流构建，把 explore、plan、code 拆给不同子代理，通过 MCP 扩展操作面，并用记忆层和技能包维持长链路任务的一致性。",
    "hero.install": "安装全局工具",
    "hero.release": "打开最新版本",
    "hero.commandLabel": "bootstrap",
    "metrics.execution.label": "执行模型",
    "metrics.execution.title": "Explore / Plan / Code",
    "metrics.execution.body": "子代理让上下文更小，推理和决策也更清晰。",
    "metrics.tools.label": "工具表面",
    "metrics.tools.title": "MCP + 文件 + 任务",
    "metrics.tools.body": "不是只靠提示词，而是用结构化操作完成工作。",
    "metrics.state.label": "状态层",
    "metrics.state.title": "Memory + Skills",
    "metrics.state.body": "项目知识不会困在一次孤立会话里。",
    "terminal.title": "实时会话 / ycode runtime",
    "terminal.prelude1": "$ ycode \"检查仓库、修补 workflow、发布包\"",
    "terminal.prelude2": "[agent] 正在加载记忆 · 解析技能包 · 准备工具",
    "telemetry.eyebrow": "运行遥测",
    "telemetry.active": "运行中",
    "telemetry.agent": "代理切换",
    "telemetry.tool": "工具执行",
    "telemetry.memory": "记忆召回",
    "capabilities.eyebrow": "能力面",
    "capabilities.title": "它为需要结构化动作的仓库操作而生，不是只会“聊得像对”。",
    "capabilities.route.title": "子代理路由",
    "capabilities.route.body": "把发现、规划和代码执行拆到不同职责轨道上。",
    "capabilities.mcp.title": "MCP 集成",
    "capabilities.mcp.body": "把外部能力面稳定接进 CLI，而不是压扁成纯文本。",
    "capabilities.memory.title": "记忆层",
    "capabilities.memory.body": "在更长的工程会话里保留 profile、daily 和 project 上下文。",
    "capabilities.skills.title": "技能加载",
    "capabilities.skills.body": "用可复用技能包标准化发版、评审、UI 和编码流程。",
    "workflow.eyebrow": "工作流卡组",
    "workflow.title": "典型命令界面",
    "workflow.command1": "ycode \"检查仓库并起草发版计划\"",
    "workflow.command2": "ycode \"接好 GitHub Actions 并发布到 nuget.org\"",
    "workflow.command3": "ycode \"把 pages 门户优化成终端化体验\"",
    "workflow.read.label": "读取",
    "workflow.read.title": "仓库图谱",
    "workflow.reason.label": "推理",
    "workflow.reason.title": "计划块",
    "workflow.act.label": "执行",
    "workflow.act.title": "补丁 + 发布",
    "dock.install.eyebrow": "安装",
    "dock.install.title": "NuGet 包",
    "dock.install.body": "全局安装、查看版本，并检查已发布的包元数据。",
    "dock.release.eyebrow": "产物",
    "dock.release.title": "Releases",
    "dock.release.body": "跟踪 tag 构建、发布资产和自动化输出。",
    "dock.source.eyebrow": "源码",
    "dock.source.title": "仓库源码",
    "dock.source.body": "浏览实现细节、当前 workflow 和代码历史。",
    "dock.packages.eyebrow": "镜像",
    "dock.packages.title": "GitHub Packages",
    "dock.packages.body": "查看由 release workflow 同步发布的镜像仓库。",
    "chart.eyebrow": "信号",
    "chart.title": "仓库热度轨迹",
    "chart.alt": "YCode CLI 的 Star History 图表",
    "footer.left": "终端优先、自动化驱动、真正理解仓库上下文。",
    "copy.default": "复制",
    "copy.success": "已复制",
    "copy.failure": "复制失败"
  },
  en: {
    "meta.title": "YCode CLI | Terminal-Native AI Coding Agent",
    "meta.description": "YCode CLI is a terminal-native AI coding agent with subagent orchestration, MCP tool integration, memory layers, and skill loading.",
    "brand.aria": "YCode CLI repository",
    "brand.alt": "YCode CLI icon",
    "brand.tagline": "terminal-native coding agent",
    "topbar.statusAria": "Current release status",
    "topbar.status": "release channel: v1.0.5 / nuget online / pages synced",
    "nav.nuget": "NuGet",
    "nav.releases": "Releases",
    "nav.source": "Source",
    "hero.eyebrow": "cli portal / orchestration / agent runtime",
    "hero.title": "Operate code like a live terminal system, not a static chatbot.",
    "hero.body": "YCode CLI is built for repository work. It routes explore, plan, and code phases across subagents, extends operations through MCP tools, and keeps long-running work coherent with memory and skill packs.",
    "hero.install": "Install Global Tool",
    "hero.release": "Open Latest Release",
    "hero.commandLabel": "bootstrap",
    "metrics.execution.label": "Execution Model",
    "metrics.execution.title": "Explore / Plan / Code",
    "metrics.execution.body": "Subagents keep context smaller and decisions more legible.",
    "metrics.tools.label": "Tool Surface",
    "metrics.tools.title": "MCP + Files + Tasks",
    "metrics.tools.body": "Structured operations instead of prompt-only tricks.",
    "metrics.state.label": "State",
    "metrics.state.title": "Memory + Skills",
    "metrics.state.body": "Project knowledge survives beyond one isolated session.",
    "terminal.title": "live session / ycode runtime",
    "terminal.prelude1": "$ ycode \"inspect repo, patch workflow, publish package\"",
    "terminal.prelude2": "[agent] loading memory · resolving skill packs · preparing tools",
    "telemetry.eyebrow": "runtime telemetry",
    "telemetry.active": "active",
    "telemetry.agent": "agent switch",
    "telemetry.tool": "tool execution",
    "telemetry.memory": "memory recall",
    "capabilities.eyebrow": "capabilities",
    "capabilities.title": "Made for repo operations that need structure, not vibe-only prompting.",
    "capabilities.route.title": "Subagent routing",
    "capabilities.route.body": "Split discovery, planning, and code execution into specialized tracks.",
    "capabilities.mcp.title": "MCP integration",
    "capabilities.mcp.body": "Plug external capability surfaces into the CLI without flattening them into plain text.",
    "capabilities.memory.title": "Memory layers",
    "capabilities.memory.body": "Carry profile, daily, and project context across longer engineering sessions.",
    "capabilities.skills.title": "Skill loading",
    "capabilities.skills.body": "Use repeatable skill packs to standardize release, review, UI, and coding workflows.",
    "workflow.eyebrow": "workflow deck",
    "workflow.title": "Typical command surface",
    "workflow.command1": "ycode \"inspect the repo and draft a release plan\"",
    "workflow.command2": "ycode \"wire GitHub Actions and publish to nuget.org\"",
    "workflow.command3": "ycode \"optimize the pages portal with terminal UX\"",
    "workflow.read.label": "read",
    "workflow.read.title": "repo graph",
    "workflow.reason.label": "reason",
    "workflow.reason.title": "plan blocks",
    "workflow.act.label": "act",
    "workflow.act.title": "patch + ship",
    "dock.install.eyebrow": "install",
    "dock.install.title": "NuGet Package",
    "dock.install.body": "Install globally, review versions, and see the published package metadata.",
    "dock.release.eyebrow": "artifacts",
    "dock.release.title": "Releases",
    "dock.release.body": "Track tagged builds, release assets, and automation output.",
    "dock.source.eyebrow": "source",
    "dock.source.title": "Repository",
    "dock.source.body": "Browse implementation details, current workflows, and code history.",
    "dock.packages.eyebrow": "mirror",
    "dock.packages.title": "GitHub Packages",
    "dock.packages.body": "Inspect the mirrored package registry published from the release workflow.",
    "chart.eyebrow": "signal",
    "chart.title": "Repository traction",
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
      { text: "> explore: 仓库扫描完成 / 已识别 .NET 全局工具项目", className: "comment" },
      { text: "> tool: 已读取包元数据、workflows、release tags", className: "tool" },
      { text: "assistant: 我发现这里已经有发布链路和面向 dotnet tool 分发的 CLI 包配置。", className: "assistant" },
      { text: "assistant: 下一步是修补自动化、校验包图标，然后打带标签的发布版本。", className: "assistant" }
    ],
    [
      { text: "> plan: 构建终端优先门户 / 保持现有部署流", className: "comment" },
      { text: "> tool: 正在编辑 docs/index.html、docs/assets/site.css、docs/assets/site.js", className: "tool" },
      { text: "assistant: 门户会改成更强的运行时视角，带遥测卡片、命令面板和流式终端反馈。", className: "assistant" },
      { text: "assistant: 动画会保持 GPU 友好，同时尊重 reduced-motion 偏好。", className: "assistant" }
    ],
    [
      { text: "> release: v1.0.5 已上线 / pages 已同步 / registry 已镜像", className: "comment" },
      { text: "> memory: profile + project context restored", className: "tool" },
      { text: "assistant: 运行时健康。你可以继续在终端里驱动任务，而不是在多个工具间来回跳。", className: "assistant" },
      { text: "assistant: 等待下一条命令。", className: "assistant" }
    ]
  ],
  en: [
    [
      { text: "> explore: repo scan complete / .NET tool project detected", className: "comment" },
      { text: "> tool: loaded package metadata, workflows, release tags", className: "tool" },
      { text: "assistant: I found an existing publish pipeline and a CLI package targeting dotnet tool distribution.", className: "assistant" },
      { text: "assistant: Next step is to patch automation, validate the package icon, and publish a tagged release.", className: "assistant" }
    ],
    [
      { text: "> plan: build terminal-first portal / preserve deployment flow", className: "comment" },
      { text: "> tool: editing docs/index.html, docs/assets/site.css, docs/assets/site.js", className: "tool" },
      { text: "assistant: Rewriting the portal with a darker runtime deck, animated telemetry, and streamed terminal feedback.", className: "assistant" },
      { text: "assistant: Motion stays GPU-friendly and respects reduced-motion preferences.", className: "assistant" }
    ],
    [
      { text: "> release: v1.0.5 package online / pages synced / registry mirrored", className: "comment" },
      { text: "> memory: profile + project context restored", className: "tool" },
      { text: "assistant: Runtime healthy. You can keep driving work from the terminal instead of bouncing between tools.", className: "assistant" },
      { text: "assistant: Ready for the next command.", className: "assistant" }
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
    // Ignore storage failures and keep the current in-memory language.
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
    await delay(2400);
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
    await delay(16);
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
        await delay(120);
      }

      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.setAttribute("aria-hidden", "true");
      typedTerminal.appendChild(cursor);

      await delay(900);
      if (runId !== terminalRunId) return;

      cursor.remove();

      for (let index = lines.length - 1; index >= 0; index -= 1) {
        const completed = await eraseLine(lines[index], runId);
        if (!completed) return;
        lines[index].remove();
        await delay(40);
      }

      typedTerminal.classList.add("is-switching");
      await delay(140);
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
