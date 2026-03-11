const copyButton = document.querySelector("#copy-command");
const installCommand = document.querySelector("#install-command");
const year = document.querySelector("#year");

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
