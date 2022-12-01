export class SimpleDefault {
  constructor() {}
  headerD() {
    let header = document.getElementById("header");
    header.addEventListener("mouseover", () => {
      header.style.backgroundColor = "blanchedalmond";
      header.style.border = "1px solid #000";
    });
    header.addEventListener("mouseout", () => {
      header.style.backgroundColor = "antiquewhite";
      header.style.border = "1px solid #aaa";
    });
  }
  navD() {
    let navBar = document.getElementById("nav-bar");
    navBar.addEventListener("mouseover", () => {
      navBar.style.backgroundColor = "blanchedalmond";
      navBar.style.border = "1px solid #000";
    });
    navBar.addEventListener("mouseout", () => {
      navBar.style.backgroundColor = "antiquewhite";
      navBar.style.border = "1px solid #aaa";
    });
  }
  asideD() {
    let aside = document.getElementById("aside");
    aside.addEventListener("mouseover", () => {
      aside.style.backgroundColor = "blanchedalmond";
      aside.style.border = "1px solid #000";
    });
    aside.addEventListener("mouseout", () => {
      aside.style.backgroundColor = "antiquewhite";
      aside.style.border = "1px solid #aaa";
    });
  }
  mainD() {
    let main = document.getElementById("main");
    main.addEventListener("mouseover", () => {
      main.style.backgroundColor = "blanchedalmond";
      main.style.border = "1px solid #000";
    });
    main.addEventListener("mouseout", () => {
      main.style.backgroundColor = "antiquewhite";
      main.style.border = "1px solid #aaa";
    });
  }
  footerD() {
    let footer = document.getElementById("footer");
    footer.addEventListener("mouseover", () => {
      footer.style.backgroundColor = "blanchedalmond";
      footer.style.border = "1px solid #000";
    });
    footer.addEventListener("mouseout", () => {
      footer.style.backgroundColor = "antiquewhite";
      footer.style.border = "1px solid #aaa";
    });
  }
}
