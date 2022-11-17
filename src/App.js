window.addEventListener('load', () => {

    class CreateElement{
        constructor(elementChild, nodeText, elementFather){
        this.father = document.getElementById(elementFather);
        this.element = document.createElement(elementChild);
        this.textNode = document.createTextNode(nodeText);
        this.elementAttr = null;
        }
        create(){
            this.element.appendChild(this.textNode);
            this.elementAttr = this.father.appendChild(this.element);
        }
        addAttr(name, value){
            this.elementAttr.setAttribute(name, value);
        }
    }
    
    function createElement(nameElementChild, contentTextNode, nameElementFather, nameAttr = 'id', valueAttr = 'nameId'){

        let create = new CreateElement(nameElementChild, contentTextNode, nameElementFather);
        create.create();
        create.addAttr(nameAttr, valueAttr);
    
    }

    function aside (){
        createElement('aside', '', 'root', 'id', 'aside-app');
    }

    function main (){
        createElement('main', '', 'root', 'id', 'main-app');
    }

    function header (){
        createElement('header', '', 'root', 'id', 'header-app');
        createElement('nav', '', 'header-app', 'id', 'nav');
    }

    aside();
    main();
    header();

    console.log(document.getElementById('header'));


});