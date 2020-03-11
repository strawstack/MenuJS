class Menu {
    constructor(_config) {
        if (_config == undefined) _config = {};
        this.config = {};

        // Container
        this.config.container = _config.container || '.menu-container';

        // Title
        this.config.title = _config.title || 'Menu';

        // Items
        this.config.items = undefined;
        if (Object.keys(_config).length == 0 || _config.items == undefined) {
            // Demo items
            this.config.items = [
                "Start Game", // try an html-string!
                "Level Select",
                "About",
                "Settings"
            ];
        } else {
            // Given items array
            this.config.items = _config.items;
        }

        // Style
        this.config.style = true;
        if (_config.style === false) {
            this.config.style = false;
        }

        // Containers
        let check = document.querySelector(this.config.container);
        if (check == null) {
            this.container = this.makeElem(this.config.container.substr(1));
        } else {
            this.container = check;
        }
        this.area = this.makeElem("menu-area");

        // Title
        this.title = this.makeElem("menu-title", "h1");
        this.title.innerHTML = this.config.title;

        // List
        this.ul = this.makeElem("menu-items", "ul");
        for (let item of this.config.items) {
            let li = this.makeElem("menu-item", "li");

            if (typeof item == "string") {
                li.innerHTML = item;

            } else if (typeof item == "object") {
                li.innerHTML = item.name;
                if (item.onclick != undefined) {
                    li.addEventListener("click", (e) => {
                        item.onclick(e);
                    });
                }

            }
            this.ul.appendChild(li);
        }

        // Connect elements
        this.container.appendChild(this.area);
        this.area.appendChild(this.title);
        this.area.appendChild(this.ul);

        // New element created
        if (check == null) {
            document.body.prepend(this.container);
        }

        // Inject style element
        if (this.config.style) {
            let style = this.makeStyle();
            document.head.appendChild(style);
        }
    }
    makeStyle() {
        let style = document.createElement("style");
        style.innerHTML = `
        ${this.config.container} {
            display: grid;
            grid-template-columns: 1fr minmax(0px, 600px) 1fr;
            height: 100%;
        }
        .menu-area {
            grid-column: 2 / 3;
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
            color: #555;
        }
        .menu-title {
            text-align: center;
            font-size: 3.2rem;
        }
        .menu-items {
            list-style-type: none;
            padding: 0px;
            font-size: 1.5rem;
        }
        .menu-item {
            text-align: center;
            background: #333;
            margin: 40px 0px;
            padding: 20px 0px;
            cursor: pointer;
            color: white;
        }
        .menu-item:nth-child(1):hover {
            background: #0892A5;
        }
        .menu-item:nth-child(1) {
            background: #70B8C2;
        }
        .menu-item:nth-child(2):hover {
            background: #06908F;
        }
        .menu-item:nth-child(2) {
            background: #70C2C1;
        }
        .menu-item:nth-child(3):hover {
            background: #0CA4A5;
        }
        .menu-item:nth-child(3) {
            background: #70C1C2;
        }
        .menu-item:nth-child(4):hover {
            background: #DBB68F;
        }
        .menu-item:nth-child(4) {
            background: #E0CDB8;
        }`
        return style;
    }
    makeElem(className, tag) {
        if (tag == undefined) tag = "div";
        let div = document.createElement(tag);
        div.className = className;
        return div;
    }
}
