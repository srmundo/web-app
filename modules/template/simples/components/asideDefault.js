import { Create } from "../../../create.js";

export function aside() {
    let createAside = new Create("aside", "cont-aside");
    createAside.add();
    createAside.addAttribute("id", "aside");

    let contH1 = new Create("div", "aside");
    contH1.add();
    contH1.addAttribute("id", "cont-h1-aside");

    let h1 = new Create("h1", "cont-h1-aside");
    h1.add();
    h1.addAttribute("id", "h1-aside");
    h1.addText("Aside");
  }