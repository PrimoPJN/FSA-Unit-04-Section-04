const checkBox = document.getElementById("agreeTC");
const button = document.getElementById("sendButton");

// Add an event listener for the input event
checkBox.addEventListener("input", () => {
  if (checkBox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});