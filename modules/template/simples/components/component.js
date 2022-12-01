import { Create } from "../../../create.js";
import { header } from "./headerDefault.js";
import { nav } from "./navDefault.js";
import { contGridMainAside } from "./contGridMainAside.js";
import { contAside } from "./contAsideDefault.js";
import { aside } from "./asideDefault.js";
import { contMain } from "./contMainDefault.js";
import { main } from "./mainDefault.js";
import { footer } from "./footerDefault.js";
import { mega } from "../../../interface/nav/mega/mega.js";

export const component = {
  selection: ["header", "nav", "aside", "main", "footer"],
  header: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        header();
        const path =
          location.origin + "/modules/template/simples/css/simpleHeader.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  nav: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        nav();
        const path =
          location.origin + "/modules/template/simples/css/simpleNav.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
    mega: {
      name: "mega",
      add: function () {
        mega();
        const path = location.origin + "/modules/interface/nav/mega/mega.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  contMainAside: {
    selection: ["default"],
    default: {
      name: "default",
      add: function () {
        contGridMainAside();
        const path =
          location.origin + "/modules/template/simples/css/simpleContainer.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  contAside: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        contAside();
        const path =
          location.origin + "/modules/template/simples/css/simpleAside.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  aside: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        aside();
        const path =
          location.origin + "/modules/template/simples/css/simpleAside.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  contMain: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        contMain();
        const path =
          location.origin + "/modules/template/simples/css/simpleMain.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  main: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        main();
        const path =
          location.origin + "/modules/template/simples/css/simpleMain.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
  footer: {
    selection: ["default", "mega"],
    default: {
      name: "default",
      add: function () {
        footer();
        const path =
          location.origin + "/modules/template/simples/css/simpleFooter.css";
        let head = (document.head.id = "head");
        let link = new Create("link", "head");
        link.add();
        link.addAttribute("rel", "stylesheet");
        link.addAttribute("href", path);
      },
    },
  },
};

export function Component(fragment, style) {
  for (let i = 0; i < component.selection.length; i++) {
    if (fragment === component.selection[i]) {
      for (let i = 0; i < component[fragment].selection.length; i++) {
        if (style === component[fragment].selection[i]) {
          component[fragment][style].add();
        }
      }
    }
  }
}
