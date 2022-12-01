import { Create } from "../../../create.js";

export function header() {
    let createHeader = new Create("header", "container");
    createHeader.add();
    createHeader.addAttribute("id", "header");

    let contH1 = new Create("div", "header");
    contH1.add();
    contH1.addAttribute("id", "cont-h1-header");

    let h1 = new Create("h1", "cont-h1-header");
    h1.add();
    h1.addAttribute("id", "h1-header");
    h1.addText("Header");
}