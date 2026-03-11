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

const terminalFrames = [
  { text: "> explore: scanning project structure and package metadata", className: "comment" },
  { text: "> plan: create release workflow and pages portal updates", className: "comment" },
  { text: "assistant: I found a .NET tool project with NuGet publishing in place.", className: "assistant" },
  { text: "assistant: Next, I will patch GitHub Actions, verify package metadata, and publish a tagged release.", className: "assistant" },
  { text: "assistant: Portal refreshed. Terminal UI online. Typing simulation active.", className: "assistant" }
];

function renderStaticTerminal() {
  if (!typedTerminal) return;

  typedTerminal.innerHTML = terminalFrames
    .map((frame) => `<span class="line ${frame.className}">${frame.text}</span>`)
    .join("");
}

async function playTerminalAnimation() {
  if (!typedTerminal) return;
  if (prefersReducedMotion) {
    renderStaticTerminal();
    return;
  }

  typedTerminal.innerHTML = "";

  for (const frame of terminalFrames) {
    const line = document.createElement("span");
    line.className = `line ${frame.className}`;
    typedTerminal.appendChild(line);

    for (const character of frame.text) {
      line.textContent += character;
      await new Promise((resolve) => window.setTimeout(resolve, 18));
    }

    await new Promise((resolve) => window.setTimeout(resolve, 260));
  }

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.setAttribute("aria-hidden", "true");
  typedTerminal.appendChild(cursor);
}

playTerminalAnimation();
