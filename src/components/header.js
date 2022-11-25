import {  } from "../../modules/icon.js";
export class AddHeader {
    constructor(fatherNode, textNode = '') {
      this.father = document.getElementById(fatherNode);
      this.ele = document.createElement('header');
      this.txt = document.createTextNode(textNode);
    }
    add() {
      this.ele.appendChild(this.txt);
      this.father.appendChild(this.ele);
    }
    addAttribute(nameAttr = 'id', valueAttr = 'header'){
      this.ele.setAttribute(nameAttr, valueAttr);
    }
    addIcon(icon){
        this.icon = icon;
    }
  }