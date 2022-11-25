import { AddElement } from "../modules/createElement.js";
import { AddHeader } from "./components/header.js";
import { icon } from "./assets/ico/focus_ico.js";


function createContainer(){
  let container = new AddElement('div', '', 'root');
  container.add();
  container.addAttribute('id', 'cont');
}

function header () {
  let header = new AddHeader('cont');
  header.add()
  header.addAttribute();
}

createContainer();
header();
