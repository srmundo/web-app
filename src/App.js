window.addEventListener("load", () => {
  class CreateElement {
    constructor(elementChild, nodeText, elementFather) {
      this.father = document.getElementById(elementFather);
      this.element = document.createElement(elementChild);
      this.textNode = document.createTextNode(nodeText);
      this.elementAttr = null;
    }
    create() {
      this.element.appendChild(this.textNode);
      this.elementAttr = this.father.appendChild(this.element);
    }
    addAttr(name, value, hrefA, linkA) {
      this.elementAttr.setAttribute(name, value);
      this.elementAttr.setAttribute(hrefA, linkA);
    }
    addAttrAncle(hrefA, linkA) {
      this.elementAttr.setAttribute(hrefA, linkA);
    }
  }

  function createElement(
    nameElementChild,
    contentTextNode,
    nameElementFather,
    nameAttr = "id",
    valueAttr = "nameId",
    linkValue = "#"
  ) {
    let create = new CreateElement(
      nameElementChild,
      contentTextNode,
      nameElementFather
    );
    create.create();
    create.addAttr(nameAttr, valueAttr);
    if (create.element.nodeName == "A") {
      create.addAttrAncle("href", linkValue);
    }
  }

  function section() {
    createElement("section", "", "root", "id", "section-app");
  }

  function aside() {
    createElement("aside", "", "root", "id", "aside-app");
    createElement("ul", "", "aside-app", "id", "ul-aside-app");

    createElement("li", "", "ul-aside-app", "id", "li1-aside-app");
    createElement("div", "", "li1-aside-app", "id", "cont-grid-li1-aside");
    createElement(
      "a",
      "Getting Started",
      "cont-grid-li1-aside",
      "id",
      "ancle1-li-ul-aside-app"
    );
    createElement("span", "", "cont-grid-li1-aside", "class", "icon-rocket");

    createElement("li", "", "ul-aside-app", "id", "li2-aside-app");
    createElement("div", "", "li2-aside-app", "id", "cont-grid-li2-aside");
    createElement(
      "a",
      "Cloud",
      "cont-grid-li2-aside",
      "id",
      "ancle2-li-ul-aside-app"
    );
    createElement("span", "", "cont-grid-li2-aside", "class", "icon-cloud");

    createElement("li", "", "ul-aside-app", "id", "li3-aside-app");
    createElement("div", "", "li3-aside-app", "id", "cont-grid-li3-aside");
    createElement(
      "a",
      "Data Base",
      "cont-grid-li3-aside",
      "id",
      "ancle3-li-ul-aside-app"
    );
    createElement("span", "", "cont-grid-li3-aside", "class", "icon-database");

    createElement("li", "", "ul-aside-app", "id", "li4-aside-app");
    createElement("div", "", "li4-aside-app", "id", "cont-grid-li4-aside");
    createElement(
      "a",
      "Users",
      "cont-grid-li4-aside",
      "id",
      "ancle4-li-ul-aside-app"
    );
    createElement("span", "", "cont-grid-li4-aside", "class", "icon-users");

    createElement("li", "", "ul-aside-app", "id", "li5-aside-app");
    createElement("div", "", "li5-aside-app", "id", "cont-grid-li5-aside");
    createElement(
      "a",
      "Settings",
      "cont-grid-li5-aside",
      "id",
      "ancle5-li-ul-aside-app"
    );
    createElement("span", "", "cont-grid-li5-aside", "class", "icon-cogs");
  }

  function main() {
    createElement("main", "", "section-app", "id", "main-app");
  }

  function header() {
    createElement("header", "", "section-app", "id", "header-app");
    createElement("nav", "", "header-app", "id", "nav-app");
    createElement("div", "", "nav-app", "id", "cont-nav");
    createElement("a", "", "cont-nav", "id", "ancle-nav btn1");
    createElement(
      "span",
      "",
      "ancle-nav btn1",
      "class",
      "icon-indent-decrease"
    );
    createElement("span", "", "cont-nav", "id", "sep-ancle");
    createElement("a", "", "cont-nav", "id", "ancle-nav btn2");
    createElement("span", "", "ancle-nav btn2", "class", "icon-contrast");
    createElement("a", "", "cont-nav", "id", "ancle-nav btn3");
    createElement("span", "", "ancle-nav btn3", "class", "icon-book");
    createElement("a", "", "cont-nav", "id", "ancle-nav btn4");
    createElement("span", "", "ancle-nav btn4", "class", "icon-user");
  }

  aside();
  section();
  header();
  main();

  function styleBody() {
    document.body.style.textAlign = "center";
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";
  }

  function styleSection() {
    let section = document.getElementById("sectio-app");
    section.style.width = "100%";
  }

  function styleAside() {
    let aside = document.getElementById("aside-app");
    let ulAside = document.getElementById("ul-aside-app");
    let btn1Aside = document.getElementById("ancle1-li-ul-aside-app");
    let btn2Aside = document.getElementById("ancle2-li-ul-aside-app");
    let btn3Aside = document.getElementById("ancle3-li-ul-aside-app");
    let btn4Aside = document.getElementById("ancle4-li-ul-aside-app");
    let btn5Aside = document.getElementById("ancle5-li-ul-aside-app");
    let divGridAside1 = document.getElementById("cont-grid-li1-aside");
    let divGridAside2 = document.getElementById("cont-grid-li2-aside");
    let divGridAside3 = document.getElementById("cont-grid-li3-aside");
    let divGridAside4 = document.getElementById("cont-grid-li4-aside");
    let divGridAside5 = document.getElementById("cont-grid-li5-aside");
    let iconAside1 = document.getElementsByClassName("icon-rocket")[0];
    let iconAside2 = document.getElementsByClassName("icon-cloud")[0];
    let iconAside3 = document.getElementsByClassName("icon-database")[0];
    let iconAside4 = document.getElementsByClassName("icon-users")[0];
    let iconAside5 = document.getElementsByClassName("icon-cogs")[0];
    let liUlAside1 = document.getElementById("li1-aside-app");
    let liUlAside2 = document.getElementById("li2-aside-app");
    let liUlAside3 = document.getElementById("li3-aside-app");
    let liUlAside4 = document.getElementById("li4-aside-app");
    let liUlAside5 = document.getElementById("li5-aside-app");

    liUlAside1.style.display = 'block';
    liUlAside1.style.width = '100%';
    liUlAside1.style.textAlign = 'center';
    liUlAside2.style.display = 'block';
    liUlAside2.style.width = '100%';
    liUlAside2.style.textAlign = 'center';
    liUlAside3.style.display = 'block';
    liUlAside3.style.width = '100%';
    liUlAside3.style.textAlign = 'center';
    liUlAside4.style.display = 'block';
    liUlAside4.style.width = '100%';
    liUlAside4.style.textAlign = 'center';
    liUlAside5.style.display = 'block';
    liUlAside5.style.width = '100%';
    liUlAside5.style.textAlign = 'center';

    ulAside.style.listStyle = "none";
    ulAside.style.padding = '0px';

    iconAside1.style.color = "#ddd";
    iconAside1.style.padding = "2%";
    iconAside1.style.fontSize = "17px";
    iconAside1.style.textAlign = "right";
    iconAside2.style.color = "#ddd";
    iconAside2.style.padding = "2%";
    iconAside2.style.fontSize = "17px";
    iconAside2.style.textAlign = "right";
    iconAside3.style.color = "#ddd";
    iconAside3.style.padding = "2%";
    iconAside3.style.fontSize = "17px";
    iconAside3.style.textAlign = "right";
    iconAside4.style.color = "#ddd";
    iconAside4.style.padding = "2%";
    iconAside4.style.fontSize = "17px";
    iconAside4.style.textAlign = "right";
    iconAside5.style.color = "#ddd";
    iconAside5.style.padding = "2%";
    iconAside5.style.fontSize = "17px";
    iconAside5.style.textAlign = "right";

    divGridAside1.style.display = "grid";
    divGridAside1.style.padding = "5%";
    divGridAside1.style.gridTemplateColumns = "5fr 1.5fr";
    btn1Aside.style.color = "#ddd";
    btn1Aside.style.textAlign = "right";
    btn1Aside.style.textDecoration = "none";
    divGridAside1.addEventListener("mouseover", () => {
      btn1Aside.style.color = "#fff";
    });
    divGridAside1.addEventListener("mouseout", () => {
      btn1Aside.style.color = "#ddd";
    });

    divGridAside2.style.display = "grid";
    divGridAside2.style.padding = "5%";
    divGridAside2.style.gridTemplateColumns = "5fr 1.5fr";
    btn2Aside.style.textAlign = "right";
    btn2Aside.style.color = "#ddd";
    btn2Aside.style.textDecoration = "none";
    divGridAside2.addEventListener("mouseover", () => {
      btn2Aside.style.color = "#fff";
    });
    divGridAside2.addEventListener("mouseout", () => {
      btn2Aside.style.color = "#ddd";
    });

    divGridAside3.style.display = "grid";
    divGridAside3.style.padding = "5%";
    btn3Aside.style.color = "#ddd";
    btn3Aside.style.textDecoration = "none";
    btn3Aside.style.textAlign = "right";
    divGridAside3.style.gridTemplateColumns = "5fr 1.5fr";
    divGridAside3.addEventListener("mouseover", () => {
      btn3Aside.style.color = "#fff";
    });
    divGridAside3.addEventListener("mouseout", () => {
      btn3Aside.style.color = "#ddd";
    });

    divGridAside4.style.display = "grid";
    divGridAside4.style.padding = "5%";
    btn4Aside.style.color = "#ddd";
    btn4Aside.style.textAlign = "right";
    divGridAside4.style.gridTemplateColumns = "5fr 1.5fr";
    btn4Aside.style.textDecoration = "none";
    divGridAside4.addEventListener("mouseover", () => {
      btn4Aside.style.color = "#fff";
    });
    divGridAside4.addEventListener("mouseout", () => {
      btn4Aside.style.color = "#ddd";
    });

    divGridAside5.style.display = "grid";
    divGridAside5.style.padding = "5%";
    btn5Aside.style.color = "#ddd";
    btn5Aside.style.textDecoration = "none";
    btn5Aside.style.textAlign = "right";
    btn1Aside.style.width = "100%";
    divGridAside5.style.gridTemplateColumns = "5fr 1.5fr";
    divGridAside5.addEventListener("mouseover", () => {
      btn5Aside.style.color = "#fff";
    });
    divGridAside5.addEventListener("mouseout", () => {
      btn5Aside.style.color = "#ddd";
    });
    aside.style.backgroundColor = "#1f1e37";
    aside.style.padding = "5px";
    aside.style.transitionProperty = 'tranform';
    aside.style.transitionDuration = '1s';
  }

  function styleRoot() {
    let root = document.getElementById("root");
    root.style.display = "grid";
    root.style.gridTemplateColumns = "1.5fr 10fr";
    root.style.minHeight = window.innerHeight.toString() + "px";
  }

  function styleHeaderApp() {
    let headerApp = document.getElementById("header-app");
    let contNav = document.getElementById("cont-nav");
    let btn1Header = document.getElementById("ancle-nav btn1");
    let btn2Header = document.getElementById("ancle-nav btn2");
    let btn3Header = document.getElementById("ancle-nav btn3");
    let btn4Header = document.getElementById("ancle-nav btn4");
    document.getElementById("sep-ancle").style.display = "inline-block";
    document.getElementById("sep-ancle").style.height = "100%";
    document.getElementById("sep-ancle").style.width = "100%";
    document.getElementById("sep-ancle").style.padding = "10px";

    headerApp.style.background = "#FFF";
    headerApp.style.display = "block";
    headerApp.style.borderBottom = "solid 1px #eee";
    headerApp.style.paddingLeft = "20px";
    headerApp.style.paddingRight = "20px";
    headerApp.style.paddingTop = "5px";
    headerApp.style.paddingBottom = "5px";
    headerApp.style.display = "block";
    contNav.style.width = "100%";
    contNav.style.display = "grid";
    contNav.style.gridTemplateColumns = "1fr 20fr 1fr 1fr 1fr";

    btn1Header.style.textDecoration = "none";
    btn1Header.style.backgroundColor = "none";
    btn1Header.style.textAlign = "left";
    btn1Header.style.display = "inline-block";
    btn1Header.style.padding = "5px";
    btn1Header.style.width = "100%";
    btn1Header.style.color = "#000";
    btn2Header.style.textDecoration = "none";
    btn2Header.style.backgroundColor = "none";
    btn2Header.style.display = "inline-block";
    btn2Header.style.padding = "5px";
    btn2Header.style.width = "100%";
    btn2Header.style.color = "#000";
    btn3Header.style.textDecoration = "none";
    btn3Header.style.backgroundColor = "none";
    btn3Header.style.display = "inline-block";
    btn3Header.style.padding = "5px";
    btn3Header.style.width = "100%";
    btn3Header.style.color = "#000";
    btn4Header.style.textDecoration = "none";
    btn4Header.style.backgroundColor = "none";
    btn4Header.style.display = "inline-block";
    btn4Header.style.padding = "5px";
    btn4Header.style.width = "100%";
    btn4Header.style.color = "#000";
  }

  styleHeaderApp();
  styleRoot();
  styleBody();
  styleAside();

  let btnMenuHeader = document.getElementById("ancle-nav btn1");

  btnMenuHeader.addEventListener("click", () => {
    let btn1Aside = document.getElementById("ancle1-li-ul-aside-app");
    let btn2Aside = document.getElementById("ancle2-li-ul-aside-app");
    let btn3Aside = document.getElementById("ancle3-li-ul-aside-app");
    let btn4Aside = document.getElementById("ancle4-li-ul-aside-app");
    let btn5Aside = document.getElementById("ancle5-li-ul-aside-app");
    let iconAside1 = document.getElementsByClassName("icon-rocket")[0];
    let iconAside2 = document.getElementsByClassName("icon-cloud")[0];
    let iconAside3 = document.getElementsByClassName("icon-database")[0];
    let iconAside4 = document.getElementsByClassName("icon-users")[0];
    let iconAside5 = document.getElementsByClassName("icon-cogs")[0];
    let divGridAside1 = document.getElementById("cont-grid-li1-aside");
    let divGridAside2 = document.getElementById("cont-grid-li2-aside");
    let divGridAside3 = document.getElementById("cont-grid-li3-aside");
    let divGridAside4 = document.getElementById("cont-grid-li4-aside");
    let divGridAside5 = document.getElementById("cont-grid-li5-aside");
    let aside = document.getElementById("aside-app");
    let ulAside = document.getElementById("ul-aside-app");

    if (root.style.gridTemplateColumns === "1.5fr 10fr") {
      root.style.gridTemplateColumns = "0.2fr 13fr";
      document.getElementsByClassName("icon-indent-decrease")[0].className =
        "icon-indent-increase";
      btn1Aside.style.display = "none";
      btn2Aside.style.display = "none";
      btn3Aside.style.display = "none";
      btn4Aside.style.display = "none";
      btn5Aside.style.display = "none";
      iconAside1.style.fontSize = "20px";
      iconAside1.style.cursor = 'pointer';
      iconAside1.style.color = '#ddd';
      iconAside1.addEventListener('mouseover', ()=>{
        iconAside1.style.color = '#fff';
      });
      iconAside1.addEventListener('mouseout', ()=>{
        iconAside1.style.color = '#fff';
      });
      iconAside1.style.width = "100%";
      iconAside2.style.fontSize = "20px";
      iconAside2.style.cursor = 'pointer';
      iconAside2.style.color = '#ddd';
      iconAside2.addEventListener('mouseover', ()=>{
        iconAside2.style.color = '#fff';
      });
      iconAside2.addEventListener('mouseout', ()=>{
        iconAside2.style.color = '#fff';
      });
      iconAside2.style.width = "100%";
      iconAside3.style.fontSize = "20px";
      iconAside3.style.cursor = 'pointer';
      iconAside3.style.color = '#ddd';
      iconAside3.addEventListener('mouseover', ()=>{
        iconAside3.style.color = '#fff';
      });
      iconAside3.addEventListener('mouseout', ()=>{
        iconAside3.style.color = '#fff';
      });
      iconAside3.style.width = "100%";
      iconAside4.style.fontSize = "20px";
      iconAside4.style.cursor = 'pointer';
      iconAside4.style.color = '#ddd';
      iconAside4.addEventListener('mouseover', ()=>{
        iconAside4.style.color = '#fff';
      });
      iconAside4.addEventListener('mouseout', ()=>{
        iconAside4.style.color = '#fff';
      });
      iconAside4.style.width = "100%";
      iconAside5.style.fontSize = "20px";
      iconAside5.style.cursor = 'pointer';
      iconAside5.style.color = '#ddd';
      iconAside5.addEventListener('mouseover', ()=>{
        iconAside5.style.color = '#fff';
      });
      iconAside5.addEventListener('mouseout', ()=>{
        iconAside5.style.color = '#fff';
      });
      iconAside5.style.width = "100%";
      divGridAside1.style.padding = "10px";
      divGridAside1.style.textAlign = "center";
      divGridAside1.style.marginBottom = "10px";
      divGridAside1.style.display = "block";
      divGridAside2.style.padding = "10px";
      divGridAside2.style.textAlign = "center";
      divGridAside2.style.marginBottom = "10px";
      divGridAside2.style.display = "block";
      divGridAside3.style.padding = "10px";
      divGridAside3.style.textAlign = "left";
      divGridAside3.style.marginBottom = "10px";
      divGridAside3.style.display = "block";
      divGridAside4.style.padding = "10px";
      divGridAside4.style.textAlign = "center";
      divGridAside4.style.marginBottom = "10px";
      divGridAside4.style.display = "block";
      divGridAside5.style.padding = "10px";
      divGridAside5.style.textAlign = "center";
      divGridAside5.style.marginBottom = "10px";
      divGridAside5.style.display = "block";
      aside.style.display = "block";
      aside.style.transitionDelay = '0.5s';
      ulAside.style.display = "block";
      ulAside.style.textAlign = "center";
    } else if (root.style.gridTemplateColumns === "0.2fr 13fr") {
      root.style.gridTemplateColumns = "1.5fr 10fr";
      document.getElementsByClassName("icon-indent-increase")[0].className =
        "icon-indent-decrease";
      btn1Aside.style.display = "block";
      btn2Aside.style.display = "block";
      btn3Aside.style.display = "block";
      btn4Aside.style.display = "block";
      btn5Aside.style.display = "block";

      iconAside1.style.color = "#ddd";
      iconAside1.style.padding = "2%";
      iconAside1.style.fontSize = "17px";
      iconAside1.style.textAlign = "right";
      iconAside2.style.color = "#ddd";
      iconAside2.style.padding = "2%";
      iconAside2.style.fontSize = "17px";
      iconAside2.style.textAlign = "right";
      iconAside3.style.color = "#ddd";
      iconAside3.style.padding = "2%";
      iconAside3.style.fontSize = "17px";
      iconAside3.style.textAlign = "right";
      iconAside4.style.color = "#ddd";
      iconAside4.style.padding = "2%";
      iconAside4.style.fontSize = "17px";
      iconAside4.style.textAlign = "right";
      iconAside5.style.color = "#ddd";
      iconAside5.style.padding = "2%";
      iconAside5.style.fontSize = "17px";
      iconAside5.style.textAlign = "right";

      divGridAside1.style.display = "grid";
      divGridAside1.style.padding = "5%";
      divGridAside1.style.gridTemplateColumns = "5fr 1.5fr";
      btn1Aside.style.color = "#ddd";
      btn1Aside.style.textAlign = "right";
      btn1Aside.style.textDecoration = "none";
      divGridAside1.addEventListener("mouseover", () => {
        btn1Aside.style.color = "#fff";
      });
      divGridAside1.addEventListener("mouseout", () => {
        btn1Aside.style.color = "#ddd";
      });

      divGridAside2.style.display = "grid";
      divGridAside2.style.padding = "5%";
      divGridAside2.style.gridTemplateColumns = "5fr 1.5fr";
      btn2Aside.style.textAlign = "right";
      btn2Aside.style.color = "#ddd";
      btn2Aside.style.textDecoration = "none";
      divGridAside2.addEventListener("mouseover", () => {
        btn2Aside.style.color = "#fff";
      });
      divGridAside2.addEventListener("mouseout", () => {
        btn2Aside.style.color = "#ddd";
      });

      divGridAside3.style.display = "grid";
      divGridAside3.style.padding = "5%";
      btn3Aside.style.color = "#ddd";
      btn3Aside.style.textDecoration = "none";
      btn3Aside.style.textAlign = "right";
      divGridAside3.style.gridTemplateColumns = "5fr 1.5fr";
      divGridAside3.addEventListener("mouseover", () => {
        btn3Aside.style.color = "#fff";
      });
      divGridAside3.addEventListener("mouseout", () => {
        btn3Aside.style.color = "#ddd";
      });

      divGridAside4.style.display = "grid";
      divGridAside4.style.padding = "5%";
      btn4Aside.style.color = "#ddd";
      btn4Aside.style.textAlign = "right";
      divGridAside4.style.gridTemplateColumns = "5fr 1.5fr";
      btn4Aside.style.textDecoration = "none";
      divGridAside4.addEventListener("mouseover", () => {
        btn4Aside.style.color = "#fff";
      });
      divGridAside4.addEventListener("mouseout", () => {
        btn4Aside.style.color = "#ddd";
      });

      divGridAside5.style.display = "grid";
      divGridAside5.style.padding = "5%";
      btn5Aside.style.color = "#ddd";
      btn5Aside.style.textDecoration = "none";
      btn5Aside.style.textAlign = "right";
      btn1Aside.style.width = "100%";
      divGridAside5.style.gridTemplateColumns = "5fr 1.5fr";
      divGridAside5.addEventListener("mouseover", () => {
        btn5Aside.style.color = "#fff";
      });
      divGridAside5.addEventListener("mouseout", () => {
        btn5Aside.style.color = "#ddd";
      });
      aside.style.backgroundColor = "#1f1e37";
      aside.style.padding = "5px";
    }
  });
});
