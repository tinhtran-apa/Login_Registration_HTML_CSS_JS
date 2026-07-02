const includeHTML = async () => {
  try {
    let include = document.querySelector("[data-include]");
    while (include) {
      const response = await fetch(include.dataset.include);
      const wrapper = document.createElement("div");
      wrapper.innerHTML = await response.text();
      const component = wrapper.firstElementChild;
      const content = component.querySelector(".right__panel--content");
      if (content) {
        content.append(...include.childNodes);
      }
      include.replaceWith(component);
      include = document.querySelector("[data-include]");
    }
  } catch (error) {
    console.error(error);
  }
};
includeHTML();

// const checkUrl = () => {
//   if(window.location.href.includes("login")) {
//     const login = document.getElementById("login");
//     console.log(login)
//     login.classList.add("nav__path")
//   }
// }
// checkUrl();

