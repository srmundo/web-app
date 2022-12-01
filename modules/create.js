export class Create {
  constructor(element, fatherNode) {
    this.father = document.getElementById(fatherNode);
    this.ele = document.createElement(element);
    this.txt = null;
  }
  add() {
    this.father.appendChild(this.ele);
  }
  addAttribute(nameAttr, valueAttr){
    this.ele.setAttribute(nameAttr, valueAttr);
  }
  addText(text){
    this.txt = document.createTextNode(text);
    this.ele.appendChild(this.txt);
  }
}
