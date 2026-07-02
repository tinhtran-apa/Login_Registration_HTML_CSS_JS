import { showError } from "./form-utils.js";
import { error_message } from "./errors.js";

export const validateName = (id, inputId, name) => {
  if (!name) {
    return showError(id, inputId, "Name " + error_message.required);
  }
  return true;
};

export const validateEmail = (id, inputId, email) => {
  if (!email) {
    return showError(id, inputId, "Email " + error_message.required);
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return showError(id, inputId, error_message.invalid_email);
  }
  return true;
};

export const validatePassword = (id, inputId, password) => {
  if (!password) {
    return showError(id, inputId, "Password " + error_message.required);
  } else if (password.length < 8) {
    return showError(id, inputId, error_message.password_min);
  }
  return true;
};

export const validateConfirmPassword = (id, inputId, password, confirmPassword) => {
  if (!confirmPassword) {
    return showError(id, inputId, "Confirm password " + error_message.required);
  } else if (confirmPassword.length < 8) {
    return showError(id, inputId, error_message.password_min);
  } else if (password != confirmPassword) {
    return showError(id, inputId, error_message.password_not_match);
  }
  return true;
};

export const validatePolicy = (check_term_policy, policy) => {
  if (!check_term_policy.checked) {
    policy.classList.add("policy__error");
    return false;
  }
  return true;
};
