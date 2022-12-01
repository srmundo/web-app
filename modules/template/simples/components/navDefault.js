import { Create } from "../../../create.js";

export function nav() {
  let createNav = new Create("nav", "container");
  createNav.add();
  createNav.addAttribute("id", "nav-bar");

  let contH1 = new Create("div", "nav-bar");
  contH1.add();
  contH1.addAttribute("id", "p-cont-h1-nav-bar");

  let h1 = new Create("h1", "p-cont-h1-nav-bar");
  h1.add();
  h1.addAttribute("id", "p-h1-nav-bar");
  h1.addText("nav-bar");
}
