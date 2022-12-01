import { Create } from "../../create.js";
import { component, Component } from "./components/component.js";

let selectionStyle = [];

class buildSimple {
  constructor(fatherNode = "") {
    this.createContainer = new Create("div", fatherNode);
    this.createContainer.add();
    this.createContainer.addAttribute("id", "container");
  }

  header(style = "default") {
    Component("header", style);
  }

  nav(style = "default") {
    Component("nav", style);
  }

  contMainAside(style = "default") {
    Component("contMainAside", style);
  }

  contAside(style = "default") {
    Component("contAside", style);
  }

  aside(style = "default") {
    Component("aside", style);
  }

  contMain(style = "default") {
    Component("contMain", style);
  }

  main(style = "default") {
    Component("main", style);
  }

  footer(style = "default") {
    Component("footer", style);
  }
}

export class Simple {
  constructor(fatherNode) {
    this.fatherNode = fatherNode;
    this.style = {};
    this.createTemplate = new buildSimple(this.fatherNode);
  }
  add() {
    this.createTemplate.header();
    this.createTemplate.nav("mega");
    this.createTemplate.contMainAside();
    this.createTemplate.contAside();
    this.createTemplate.aside();
    this.createTemplate.contMain();
    this.createTemplate.main();
    this.createTemplate.footer();
  }
  setStyle(opt = false, stylePath = "") {}
  setScript(scriptPath) {}
  setNode(node, fatherNode, attr = "id", valueAttr = "") {
    let newNode = new Create(node, fatherNode);
    newNode.add();
    newNode.addAttribute(attr, valueAttr);
  }
}
