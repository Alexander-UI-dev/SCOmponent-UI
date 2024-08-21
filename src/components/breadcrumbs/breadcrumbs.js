import "./breadcrumbs.css"
let all_data;
export class Breadcrumbs {
    constructor(data, id, not_new_breadcrumbs, mainId) {
        let ignoreProps = data.ignore !== undefined ? data.ignore : [];
        if(not_new_breadcrumbs === undefined) {
            document.getElementById(mainId).innerHTML += `
                <ul class="sco-breadcrumbs" id=${id}></ul>
            `;
            all_data = data;
        }

        if(data.items && ignoreProps.indexOf("items") === -1) {
            for(let i = 0; i < data.items.length; i++) {
                if(data.items[i].id) {
                    document.getElementById(id).innerHTML += `
                        <li class="sco-breadcrumbs__item" id=${data.items[i].id}>
                            <a class="sco-breadcrumbs__link"></a>
                        </li>
                    `;
                    if(data.items[i].text && ignoreProps.indexOf("items.text") === -1)
                        document.getElementById(data.items[i].id).children[0].textContent = data.items[i].text;
                    if(data.items[i].divider && data.items[i].divider !== "default" && ignoreProps.indexOf("items.divider") === -1)
                        document.getElementById(data.items[i].id).style.setProperty("--divider-item", `'${data.items[i].divider}'`);
                    if(data.items[i].active === true && ignoreProps.indexOf("items.active") === -1)
                        document.getElementById(data.items[i].id).children[0].classList.add("sco-breadcrumbs__link--active");
                    if(data.items[i].select !== undefined && ignoreProps.indexOf("items.select") === -1) {
                        if(data.items[i].select === false) document.getElementById(data.items[i].id).children[0].style.userSelect = "none";
                        else if(data.items[i].select === true) document.getElementById(data.items[i].id).children[0].style.userSelect = "auto";
                        else document.getElementById(data.items[i].id).children[0].style.userSelect = data.select;
                    }

                    if(data.items[i].color && ignoreProps.indexOf("items.color") === -1) {
                        if(data.items[i].color.charAt(0) !== "-")
                            document.getElementById(data.items[i].id).children[0].style.color = data.items[i].color;
                        else {
                            data.items[i].color = "var(" + data.items[i].color + ")";
                            document.getElementById(data.items[i].id).children[0].style.color = data.items[i].color;
                        }
                    }

                    if(data.items[i].bg && ignoreProps.indexOf("items.bg") === -1) {
                        if(data.items[i].bg.charAt(0) !== "-")
                            document.getElementById(data.items[i].id).children[0].style.backgroundColor = data.items[i].bg;
                        else {
                            data.items[i].bg = "var(" + data.items[i].bg + ")";
                            document.getElementById(data.items[i].id).children[0].style.backgroundColor = data.items[i].bg;
                        }
                    }

                    if(data.items[i].font && ignoreProps.indexOf("items.font") === -1) {
                        if(data.items[i].font.size && ignoreProps.indexOf("items.font.size") === -1) document.getElementById(data.items[i].id).children[0].style.fontSize = data.items[i].font.size;
                        if(data.items[i].font.family && ignoreProps.indexOf("items.font.family") === -1) document.getElementById(data.items[i].id).children[0].style.fontFamily = data.items[i].font.family;
                        if(data.items[i].font.align && ignoreProps.indexOf("items.font.align") === -1) document.getElementById(data.items[i].id).children[0].style.textAlign = data.items[i].font.align;
                        if(data.items[i].font.weight && ignoreProps.indexOf("items.font.weight") === -1) document.getElementById(data.items[i].id).children[0].style.fontWeight = data.items[i].font.weight;
                        if(data.items[i].font.style && ignoreProps.indexOf("items.font.style") === -1) document.getElementById(data.items[i].id).children[0].style.fontStyle = data.items[i].font.style;
                        if(data.items[i].font.transform && ignoreProps.indexOf("items.font.transform") === -1) document.getElementById(data.items[i].id).children[0].style.textTransform = data.items[i].font.transform;
                        if(data.items[i].font.decoration && ignoreProps.indexOf("items.font.decoration") === -1) document.getElementById(data.items[i].id).children[0].style.textDecoration = data.items[i].font.decoration;
                    }

                    if(data.items[i].border) {
                        if(typeof data.items[i].border === "string" && ignoreProps.indexOf("items.border") === -1) document.getElementById(data.items[i].id).children[0].style.border = data.items[i].border;
                        if(typeof data.items[i].border === "object") {
                            if(data.items[i].border.top && ignoreProps.indexOf("items.border.top") === -1) document.getElementById(data.items[i].id).children[0].style.borderTop = data.items[i].border.top;
                            if(data.items[i].border.bottom && ignoreProps.indexOf("items.border.bottom") === -1) document.getElementById(data.items[i].id).children[0].style.borderBottom = data.items[i].border.bottom;
                            if(data.items[i].border.left && ignoreProps.indexOf("items.border.left") === -1) document.getElementById(data.items[i].id).children[0].style.borderLeft = data.items[i].border.left;
                            if(data.items[i].border.right && ignoreProps.indexOf("items.border.right") === -1) document.getElementById(data.items[i].id).children[0].style.borderRight = data.items[i].border.right;
                        }
                    }

                    //атрибуты <a></a>
                    if(data.items[i].href && ignoreProps.indexOf("items.href") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("href", data.items[i].href);
                    if(data.items[i].target && ignoreProps.indexOf("items.target") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("target", data.items[i].target);
                    if(data.items[i].access_key && ignoreProps.indexOf("items.access_key") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("accesskey", data.items[i].access_key);
                    if(data.items[i].download && ignoreProps.indexOf("items.download") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("download", data.items[i].download);
                    if(data.items[i].name && ignoreProps.indexOf("items.name") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("name", data.items[i].name);
                    if(data.items[i].title && ignoreProps.indexOf("items.title") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("title", data.items[i].title);
                    if(data.items[i].tab_index && ignoreProps.indexOf("items.tab_index") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("tab_index", data.items[i].tab_index);
                    if(data.items[i].shape && ignoreProps.indexOf("items.shape") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("shape", data.items[i].shape);
                    if(data.items[i].type && ignoreProps.indexOf("items.type") === -1)
                        document.getElementById(data.items[i].id).children[0].setAttribute("type", data.items[i].type);
                } else {
                    console.warn("[SCOmponent UI warn]: Items element must have id!");
                }
            }
        }

        if(data.wrap && ignoreProps.indexOf("wrap") === -1) {
            if(typeof data.wrap === "function") {
                let returns = data.wrap(document.getElementById(id), all_data);
                document.getElementById(id).remove()
                document.getElementById(mainId).innerHTML += returns;
            } else {
                throw new TypeError("Error! Wrap must have type function!");
            }
        }

        if(data.margin) {
            if(typeof data.margin === "string" && ignoreProps.indexOf("margin") === -1) document.getElementById(id).style.margin = data.margin;
            if(typeof data.margin === "object") {
                if(data.margin.top && ignoreProps.indexOf("margin.top") === -1) document.getElementById(id).style.marginTop = data.margin.top;
                if(data.margin.left && ignoreProps.indexOf("margin.left") === -1) document.getElementById(id).style.marginRight = data.margin.left;
                if(data.margin.right && ignoreProps.indexOf("margin.right") === -1) document.getElementById(id).style.marginLeft = data.margin.right;
                if(data.margin.bottom && ignoreProps.indexOf("margin.bottom") === -1) document.getElementById(id).style.marginTop = data.margin.bottom;
            }
        }

        if(data.padding) {
            if(typeof data.padding === "string" && ignoreProps.indexOf("padding") === -1) document.getElementById(id).style.padding = data.padding;
            if(typeof data.padding === "object") {
                if(data.padding.top && ignoreProps.indexOf("padding.top") === -1) document.getElementById(id).style.paddingTop = data.padding.top;
                if(data.padding.left && ignoreProps.indexOf("padding.left") === -1) document.getElementById(id).style.paddingRight = data.padding.left;
                if(data.padding.right && ignoreProps.indexOf("padding.right") === -1) document.getElementById(id).style.paddingLeft = data.padding.right;
                if(data.padding.bottom && ignoreProps.indexOf("padding.bottom") === -1) document.getElementById(id).style.paddingTop = data.padding.bottom;
            }
        }
    }
}
