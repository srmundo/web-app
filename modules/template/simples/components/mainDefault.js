import { Create } from "../../../create.js";
export function main() {
    let createMain = new Create("main", "cont-main");
    createMain.add();
    createMain.addAttribute("id", "main");

    let contH1 = new Create("div", "main");
    contH1.add();
    contH1.addAttribute("id", "cont-h1-main");

    let h1 = new Create("h1", "cont-h1-main");
    h1.add();
    h1.addAttribute("id", "h1-main");
    h1.addText("Main");
  }