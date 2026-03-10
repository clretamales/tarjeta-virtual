const statusElement = document.getElementById("status");
const actionButton = document.getElementById("action-button");
const messages = [
  "Todo listo para comenzar.",
  "Haz clic nuevamente cuando quieras iterar.",
  "Base lista para tus mejoras."
];

let nextMessageIndex = 1;

function updateStatusMessage() {
  if (statusElement === null) {
    return;
  }

  statusElement.textContent = messages[nextMessageIndex];
  nextMessageIndex = (nextMessageIndex + 1) % messages.length;
}

if (actionButton !== null) {
  actionButton.addEventListener("click", updateStatusMessage);
}
