const formElem = document.querySelector("form.login-form");
const formSubmission = formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = formElem.elements.email.value.trim();
  const password = formElem.elements.password.value.trim();
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  console.log({ email, password });
  formElem.reset();
});
