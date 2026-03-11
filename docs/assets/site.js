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

function renderStaticTerminal() {
  if (!typedTerminal) return;

  const lines = sessions.flatMap((session, index) => {
    const sessionLines = session.map((frame) => `<span class="line ${frame.className}">${frame.text}</span>`);
    if (index < sessions.length - 1) {
      sessionLines.push('<span class="line comment">---</span>');
    }
    return sessionLines;
  });

  typedTerminal.innerHTML = `${lines.join("")}<span class="cursor" aria-hidden="true"></span>`;
}

async function playTerminalLoop() {
  if (!typedTerminal) return;
  if (prefersReducedMotion) {
    renderStaticTerminal();
    return;
  }

  while (true) {
    typedTerminal.innerHTML = "";

    for (let s = 0; s < sessions.length; s += 1) {
      const session = sessions[s];

      for (const frame of session) {
        const line = document.createElement("span");
        line.className = `line ${frame.className}`;
        typedTerminal.appendChild(line);

        for (const character of frame.text) {
          line.textContent += character;
          await delay(16);
        }

        await delay(180);
      }

      if (s < sessions.length - 1) {
        const spacer = document.createElement("span");
        spacer.className = "line comment";
        spacer.textContent = "---";
        typedTerminal.appendChild(spacer);
      }

      await delay(520);
    }

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    typedTerminal.appendChild(cursor);

    await delay(1800);
  }
}

playTerminalLoop();
