export const showError = (id, inputId, error) => {
  const boxElement = document.getElementById(id);
  const inputElement = document.getElementById(inputId);
  const errorId = `${inputId}_error`;
  const errorElement = document.getElementById(errorId);
  if (errorElement) {
    errorElement.remove();
  }
  boxElement.insertAdjacentHTML("afterend", `<span class="error" id="${errorId}">${error}</span>`);
  inputElement.classList.add("focus-style");
};

export const clearError = (inputSelector, checkboxId, policyId) => {
  document.querySelectorAll(inputSelector).forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("focus-style");
      const errorElement = document.getElementById(`${input.id}_error`);
      if (errorElement) {
        errorElement.remove();
      }
    });
  });

  if (checkboxId && policyId) {
    document.getElementById(checkboxId).addEventListener("change", () => {
      document.getElementById(policyId).classList.remove("policy__error");
    });
  }
};

export const showPassword = (id) => {
  if (id.type === "password") {
    id.type = "text";
  } else {
    id.type = "password";
  }
};
