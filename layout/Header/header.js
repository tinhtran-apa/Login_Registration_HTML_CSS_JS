const onMenu = async () => {
  try {
    await window.includesReady;
    let check = false;
    const menuMobile = document.getElementById("menu_mobile");
    document.getElementById("menu_bar").addEventListener("click", () => {
      console.log(check);
      if (!check) {
        menuMobile.classList.add("on__menu");
        check = true;
      } else {
        menuMobile.classList.remove("on__menu");
        check = false;
      }
    });
  } catch (error) {
    console.log(error);
  }
};
onMenu();
