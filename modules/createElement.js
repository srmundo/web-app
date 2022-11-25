export class AddElement {
  constructor(element, nodeText, fatherNode) {
    this.father = document.getElementById(fatherNode);
    this.ele = document.createElement(element);
    this.txt = document.createTextNode(nodeText);
  }
  add() {
    this.ele.appendChild(this.txt);
    this.father.appendChild(this.ele);
  }
  addAttribute(nameAttr, valueAttr){
    this.ele.setAttribute(nameAttr, valueAttr);
  }
}
