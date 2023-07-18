const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const errMessage = document.querySelector(".error-message");

function validateForm() {
  const inputError = document.querySelector("#email");
  const emailAddress = document.querySelector("input").value;

  if (emailRegex.test(emailAddress)) {
    return true;
  } else {
    errMessage.classList.remove("hidden");
    inputError.style.border = "1px solid hsl(354, 100%, 66%)";
    return false;
  }
}
