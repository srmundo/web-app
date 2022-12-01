import { Create } from "../../../create.js";
class liCreate {
  constructor(container, idN, classN = " ") {
    this.idN = idN;
    this.li = new Create("li", container);
    this.li.add();
    this.li.addAttribute("id", this.idN);
    this.li.addAttribute("class", classN);
  }
  aCreate(id = "", aText = "", link = "#", classN = " ") {
    let a = new Create("a", this.idN);
    a.add();
    a.addAttribute("id", id);
    a.addAttribute("class", classN);
    a.addAttribute("href", link);
    a.addText(aText);
  }
}

class item {
  constructor(nameId) {
    this.nameId = nameId;
    this.divItem = new Create("div", "mega-nav-container1");
    this.divItem.add();
    this.divItem.addAttribute("class", "item");
    this.divItem.addAttribute("id", this.nameId);
  }
  addH3(contText) {
    let h3Item = new Create("h3", this.nameId);
    h3Item.add();
    h3Item.addText(contText);
  }
  addUl() {
    let ulItem = new Create("ul", this.nameId);
    ulItem.add();
    ulItem.addAttribute("id", "ul-" + this.nameId);
  }
  addLi(NLi, idAName, contText = '') {
    let li1Item = new liCreate("ul-" + this.nameId, "li-" + NLi + "-" + this.nameId);
    li1Item.aCreate(idAName, contText);
  }
  addItemImg(src = '#') {
    let imgItem4 = new Create("img", this.nameId);
    imgItem4.add();
    imgItem4.addAttribute("id", "img-custom");
    imgItem4.addAttribute("src", src);
  }
}

function itemImg(nameId, textH3 = "Imagen One") {
  let divItemImg1 = new Create("div", "mega-nav-container2");
  divItemImg1.add();
  divItemImg1.addAttribute("class", "item");
  divItemImg1.addAttribute("id", nameId);

  let h3ItemImg1 = new Create("h3", nameId);
  h3ItemImg1.add();
  h3ItemImg1.addText(textH3);

  let itemImg1 = new Create("img", nameId);
  itemImg1.add();
  itemImg1.addAttribute("id", "img-" + nameId);
  itemImg1.addAttribute("src", "#");
}

export function mega() {
  let createNav = new Create("nav", "container");
  createNav.add();
  createNav.addAttribute("id", "nav-bar");

  let ulContainer = new Create("ul", "nav-bar");
  ulContainer.add();
  ulContainer.addAttribute("id", "ul-container");
  ulContainer.addAttribute("class", "mega-nav-container");

  let li1 = new liCreate("ul-container", "1");
  li1.aCreate("btn-home", "Home");

  let li2 = new liCreate("ul-container", "2", "dropdown");
  li2.aCreate("btn-pages", "Pages");

  let i = new Create("i", "btn-pages");
  i.add();
  i.addAttribute("class", "fa fa-angle-down");

  let divMegaMenu = new Create("div", "btn-pages");
  divMegaMenu.add();
  divMegaMenu.addAttribute("class", "mega-menu");
  divMegaMenu.addAttribute("id", "mega-menu");

  let divMegaNav = new Create("div", "mega-menu");
  divMegaNav.add();
  divMegaNav.addAttribute("class", "mega-nav-container");
  divMegaNav.addAttribute("id", "mega-nav-container1");

  let item1 = new item("item1");
  item1.addH3('Home Page');
  item1.addUl();
  item1.addLi('1', 'item1', 'Home Page No #1');
  item1.addLi('2', 'item1', 'Home Page No #2');
  item1.addLi('3', 'item1', 'Home Page No #3');
  item1.addLi('4', 'item1', 'Home Page No #4');
  let item2 = new item("item2");
  item2.addH3('Contacts Page');
  item2.addUl();
  item2.addLi('1', 'item2', 'Contacts Page No #1');
  item2.addLi('2', 'item2', 'Contacts Page No #2');
  item2.addLi('3', 'item2', 'Contacts Page No #3');
  item2.addLi('4', 'item2', 'Contacts Page No #4');
  let item3 = new item("item3");
  item3.addH3('Portfolio');
  item3.addUl();
  item3.addLi('1', 'item3', 'Portfolio No #1');
  item3.addLi('2', 'item3', 'Portfolio No #2');
  item3.addLi('3', 'item3', 'Portfolio No #3');
  let item4 = new item("item4");
  item4.addH3('Custom');
  item4.addUl();
  item4.addItemImg();

  let li3 = new liCreate("ul-container", "3", "dropdown");
  li3.aCreate("btn-img", "Images");

  let divMegaMenu2 = new Create("div", "btn-img");
  divMegaMenu2.add();
  divMegaMenu2.addAttribute("class", "mega-menu");
  divMegaMenu2.addAttribute("id", "mega-menu2");

  let divMegaNav2 = new Create("div", "mega-menu2");
  divMegaNav2.add();
  divMegaNav2.addAttribute("class", "mega-nav-container");
  divMegaNav2.addAttribute("id", "mega-nav-container2");

  itemImg("itemImg1");
  itemImg("itemImg2");
  itemImg("itemImg3");
  itemImg("itemImg4");

  let li4 = new liCreate("ul-container", "4");
  li4.aCreate("btn-c", "Contacts");
  let li5 = new liCreate("ul-container", "5");
  li5.aCreate("btn-about", "About");
}
