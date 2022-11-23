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
        addAttr(name, value, hrefA, linkA){
            this.elementAttr.setAttribute(name, value);
            this.elementAttr.setAttribute(hrefA, linkA);
        }
        addAttrAncle(hrefA, linkA){
            this.elementAttr.setAttribute(hrefA, linkA);
        }
    }
    
    function createElement(nameElementChild, contentTextNode, nameElementFather, nameAttr = 'id', valueAttr = 'nameId',linkValue = '#'){
        let create = new CreateElement(nameElementChild, contentTextNode, nameElementFather);
        create.create();
        create.addAttr(nameAttr, valueAttr);
        if (create.element.nodeName == 'A') {
            create.addAttrAncle('href', linkValue);
        }
    
    }


    function section () {
        createElement('section', '', 'root', 'id', 'section-app');
    }

    function aside (){
        createElement('aside', '', 'section-app', 'id', 'aside-app');
    }

    function main (){
        createElement('main', '', 'section-app', 'id', 'main-app');
    }

    function header (){
        createElement('header', '', 'section-app', 'id', 'header-app');
        createElement('nav', '', 'header-app', 'id', 'nav-app');
        createElement('div', '', 'nav-app', 'id', 'cont-nav');
        createElement('a', '', 'cont-nav', 'id', 'ancle-nav btn1');
        createElement('span', '', 'ancle-nav btn1', 'class', 'icon-menu');
        createElement('span', '', 'cont-nav', 'id', 'sep-ancle');
        createElement('a', '', 'cont-nav', 'id', 'ancle-nav btn2');
        createElement('span', '', 'ancle-nav btn2', 'class', 'icon-contrast');
        createElement('a', '', 'cont-nav', 'id', 'ancle-nav btn3');
        createElement('span', '', 'ancle-nav btn3', 'class', 'icon-book');
        createElement('a', '', 'cont-nav', 'id', 'ancle-nav btn4');
        createElement('span', '', 'ancle-nav btn4', 'class', 'icon-user');
    }

    section();
    header();
    aside();
    main();

    function styleHeaderApp(){
        let headerApp = document.getElementById('header-app');
        let contNav = document.getElementById('cont-nav');
        let btn1Header = document.getElementById('ancle-nav btn1');
        let btn2Header = document.getElementById('ancle-nav btn2')
        let btn3Header = document.getElementById('ancle-nav btn3')
        let btn4Header = document.getElementById('ancle-nav btn4')
        document.getElementById('sep-ancle').style.display = 'inline-block';
        document.getElementById('sep-ancle').style.height = '100%';
        document.getElementById('sep-ancle').style.width = '100%';
        document.getElementById('sep-ancle').style.padding = '10px';
        
        headerApp.style.background = '#FFF';
        headerApp.style.paddingLeft = '20px';
        headerApp.style.paddingRight = '20px';
        headerApp.style.paddingTop = '0px';
        headerApp.style.paddingBottom = '0px';
        headerApp.style.display = 'block';
        contNav.style.width = '100%';
        contNav.style.display = 'grid';
        contNav.style.gridTemplateColumns = '1fr 20fr 1fr 1fr 1fr';
        

        btn1Header.style.textDecoration = 'none';
        btn1Header.style.backgroundColor = 'none';
        btn1Header.style.display = 'inline-block';
        btn1Header.style.padding = '5px';
        btn1Header.style.width = '100%';
        btn1Header.style.color = '#000';
        btn2Header.style.textDecoration = 'none';
        btn2Header.style.backgroundColor = 'none';
        btn2Header.style.display = 'inline-block';
        btn2Header.style.padding = '5px';
        btn2Header.style.width = '100%';
        btn2Header.style.color = '#000';
        btn3Header.style.textDecoration = 'none';
        btn3Header.style.backgroundColor = 'none';
        btn3Header.style.display = 'inline-block';
        btn3Header.style.padding = '5px';
        btn3Header.style.width = '100%';
        btn3Header.style.color = '#000';
        btn4Header.style.textDecoration = 'none';
        btn4Header.style.backgroundColor = 'none';
        btn4Header.style.display = 'inline-block';
        btn4Header.style.padding = '5px';
        btn4Header.style.width = '100%';
        btn4Header.style.color = '#000';


        document.body.style.textAlign = 'center';


    }

    styleHeaderApp();

});