const copyButton = document.querySelector("#copy-command");
const installCommand = document.querySelector("#install-command");
const year = document.querySelector("#year");
const typedTerminal = document.querySelector("#typed-terminal");

if (copyButton && installCommand) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(installCommand.textContent.trim());
      copyButton.textContent = "Copied";

      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1600);
    } catch {
      copyButton.textContent = "Copy failed";
    }
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sessions = [
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
];

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function renderSessionMarkup(session) {
  return session
    .map((frame) => `<span class="line ${frame.className}">${frame.text}</span>`)
    .join("");
}

function renderStaticTerminal(sessionIndex = 0) {
  if (!typedTerminal) return;
  typedTerminal.innerHTML = `${renderSessionMarkup(sessions[sessionIndex])}<span class="cursor" aria-hidden="true"></span>`;
}

async function playReducedMotionLoop() {
  if (!typedTerminal) return;

  let index = 0;
  renderStaticTerminal(index);

  while (true) {
    await delay(2400);
    typedTerminal.classList.add("is-switching");
    await delay(220);
    index = (index + 1) % sessions.length;
    renderStaticTerminal(index);
    typedTerminal.classList.remove("is-switching");
  }
}

async function typeLine(line, text) {
  for (const character of text) {
    line.textContent += character;
    await delay(16);
  }
}

async function eraseLine(line) {
  while (line.textContent.length > 0) {
    line.textContent = line.textContent.slice(0, -1);
    await delay(8);
  }
}

async function playTerminalLoop() {
  if (!typedTerminal) return;
  if (prefersReducedMotion) {
    await playReducedMotionLoop();
    return;
  }

  const lines = [];

  while (true) {
    typedTerminal.innerHTML = "";
    lines.length = 0;

    for (const session of sessions) {
      for (const frame of session) {
        const line = document.createElement("span");
        line.className = `line ${frame.className}`;
        typedTerminal.appendChild(line);
        lines.push(line);

        await typeLine(line, frame.text);
        await delay(120);
      }

      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.setAttribute("aria-hidden", "true");
      typedTerminal.appendChild(cursor);

      await delay(900);
      cursor.remove();

      for (let i = lines.length - 1; i >= 0; i -= 1) {
        await eraseLine(lines[i]);
        lines[i].remove();
        lines.pop();
        await delay(40);
      }

      typedTerminal.classList.add("is-switching");
      await delay(140);
      typedTerminal.classList.remove("is-switching");
    }
  }
}

playTerminalLoop();
