import { Create } from "../../../create.js";

export function footer() {
  let createFooter = new Create("footer", "container");
  createFooter.add();
  createFooter.addAttribute("id", "footer");

  let contH1 = new Create("div", "footer");
  contH1.add();
  contH1.addAttribute("id", "cont-h1-footer");

  let h1 = new Create("h1", "cont-h1-footer");
  h1.add();
  h1.addAttribute("id", "h1-footer");
  h1.addText("Footer");
}
