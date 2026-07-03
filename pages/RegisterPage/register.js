import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
  validatePolicy,
} from "../../shared/js/validator.js";
import { clearError, showPassword } from "../../shared/js/form-utils.js";

const handleFormRegister = async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm_password").value.trim();
  const policy = document.getElementById("policy");
  const checkTermPolicy = document.getElementById("check_term_policy");
  const nameValid = validateName("label_name", "name", name);
  const emailValid = validateEmail("label_email", "email", email);
  const passwordValid = validatePassword("label_password", "password", password);
  const confirmPasswordValid = validateConfirmPassword(
    "label_confirm_password",
    "confirm_password",
    password,
    confirmPassword,
  );
  const policyValid = validatePolicy(checkTermPolicy, policy);
  if (!nameValid || !emailValid || !passwordValid || !confirmPasswordValid || !policyValid) {
    return;
  }
  alert("Register successful!");
};

const handleShowPassword = () => {
  showPassword(document.getElementById("password"));
};
document.getElementById("show_password").addEventListener("click", handleShowPassword);

const handleShowConfirmPassword = () => {
  showPassword(document.getElementById("confirm_password"));
};
document.getElementById("show_confirm_password").addEventListener("click", handleShowConfirmPassword);

const formRegister = document.querySelector(".form");

if (formRegister) {
  formRegister.addEventListener("submit", handleFormRegister);
}

clearError(".form__input input", "check_term_policy", "policy");


