const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

const inputText = nameInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  nameOutput.textContent = value || "Anonymous";
});
