import { validateEmail, validateName, validatePassword, validateConfirmPassword } from "../../shared/js/validator.js";
import { clearError, showPassword } from "../../shared/js/form-utils.js";

const handleFormLogin = (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailValid = validateEmail("label_email", "email", email);
  const passwordValid = validatePassword("label_password", "password", password);
  if (!emailValid || !passwordValid) {
    return;
  }
  alert("Login successful!");
};

const handleShowPassword = () => {
  showPassword(document.getElementById("password"));
};
document.getElementById("show_password").addEventListener("click", handleShowPassword);
document.getElementById("show_password").removeEventListener("click", handleShowPassword);

const formLogin = document.querySelector(".form");
if (formLogin) {
  formLogin.addEventListener("submit", handleFormLogin);
}

clearError(".form__input input");
