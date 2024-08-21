import "./app-bar.css"
let all_data;
export class AppBar {
    constructor(data, id, not_new_appBar, mainId) {
        let ignoreProps = data.ignore !== undefined ? data.ignore : [];
        if(not_new_appBar === undefined) {
            all_data = data;
            document.getElementById(mainId).innerHTML += `
                <header class="app-bar" id=${id}>
                    <nav class="sco-optional">
                        <div class="sco-title"></div>
                    </nav>
                </header>
            `;
        }
        if(data.title && ignoreProps.indexOf("title") === -1) document.querySelector(`#${id} nav div`).textContent = data.title;
        if(data.length && ignoreProps.indexOf("length") === -1) document.querySelector(`#${id} nav div`).style.width = data.length;
        if(data.link === true && ignoreProps.indexOf("link") === -1) document.querySelector(`#${id} nav div`).setAttribute('onclick', 'location.href="https://google.com"');

        if(data.font && ignoreProps.indexOf("font") === -1) {
            if (data.font.family && ignoreProps.indexOf("font.family") === -1) document.querySelector(`#${id} nav div`).style.fontFamily = data.font.family;
            if (data.font.size && ignoreProps.indexOf("font.size") === -1) document.querySelector(`#${id} nav div`).style.fontSize = data.font.size;
            if (data.font.weight && ignoreProps.indexOf("font.weight") === -1) document.querySelector(`#${id} nav div`).style.fontWeight = data.font.weight;
            if (data.font.style && ignoreProps.indexOf("font.style") === -1) document.querySelector(`#${id} nav div`).style.fontStyle = data.font.style;
            if (data.font.transform && ignoreProps.indexOf("font.transform") === -1) document.querySelector(`#${id} nav div`).style.textTransform = data.font.transform;
            if (data.font.decoration && ignoreProps.indexOf("font.decoration") === -1) document.querySelector(`#${id} nav div`).style.textDecoration = data.font.decoration;
        }

        if(data.border_title) {
            if(typeof data.border_title === "string" && ignoreProps.indexOf("border_title") === -1) document.querySelector(`#${id} nav div`).style.border = data.border_title;
            if(typeof data.border_title === "object") {
                if(data.border_title.top && ignoreProps.indexOf("border_title.top") === -1) document.querySelector(`#${id} nav div`).style.borderTop = data.border_title.top;
                if(data.border_title.bottom && ignoreProps.indexOf("border_title.bottom") === -1) document.querySelector(`#${id} nav div`).style.borderBottom = data.border_title.bottom;
                if(data.border_title.left && ignoreProps.indexOf("border_title.left") === -1) document.querySelector(`#${id} nav div`).style.borderLeft = data.border_title.left;
                if(data.border_title.right && ignoreProps.indexOf("border_title.right") === -1) document.querySelector(`#${id} nav div`).style.borderRight = data.border_title.right;
            }
        }

        if(data.padding_title) {
            if(typeof data.padding_title === "string" && ignoreProps.indexOf("padding_title") === -1) document.querySelector(`#${id} nav div`).style.padding = data.padding_title;
            if(typeof data.padding_title === "object") {
                if(data.padding_title.top && ignoreProps.indexOf("padding_title.top") === -1) document.querySelector(`#${id} nav div`).style.paddingTop = data.padding_title.top;
                if(data.padding_title.left && ignoreProps.indexOf("padding_title.left") === -1) document.querySelector(`#${id} nav div`).style.paddingRight = data.padding_title.left;
                if(data.padding_title.right && ignoreProps.indexOf("padding_title.right") === -1) document.querySelector(`#${id} nav div`).style.paddingLeft = data.padding_title.right;
                if(data.padding_title.bottom && ignoreProps.indexOf("padding_title.bottom") === -1) document.querySelector(`#${id} nav div`).style.paddingTop = data.padding_title.bottom;
            }
        }

        if(data.border) {
            if(typeof data.border === "string" && ignoreProps.indexOf("border") === -1) document.getElementById(id).style.border = data.border;
            if(typeof data.border === "object") {
                if(data.border.top && ignoreProps.indexOf("border.top") === -1) document.getElementById(id).style.borderTop = data.border.top;
                if(data.border.bottom && ignoreProps.indexOf("border.bottom") === -1) document.getElementById(id).style.borderBottom = data.border.bottom;
                if(data.border.left && ignoreProps.indexOf("border.left") === -1) document.getElementById(id).style.borderLeft = data.border.left;
                if(data.border.right && ignoreProps.indexOf("border.right") === -1) document.getElementById(id).style.borderRight = data.border.right;
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

        if(data.color_title && ignoreProps.indexOf("color_title") === -1) {
            if(data.color_title.charAt(0) !== "-")
                document.querySelector(`#${id} nav div`).style.color = data.color_title;
            else {
                data.color_title = "var(" + data.color_title + ")";
                document.querySelector(`#${id} nav div`).style.color = data.color_title;
            }
        }

        if(data.bg_title && ignoreProps.indexOf("bg_title") === -1) {
            if(data.bg_title.charAt(0) !== "-")
                document.querySelector(`#${id} nav div`).style.backgroundColor = data.bg_title;
            else {
                data.bg_title = "var(" + data.bg_title + ")";
                document.querySelector(`#${id} nav div`).style.backgroundColor = data.bg_title;
            }
        }


        if(data.bg && ignoreProps.indexOf("bg") === -1) {
            if(data.bg.charAt(0) !== "-")
                document.getElementById(id).style.backgroundColor = data.bg;
            else {
                data.bg = "var(" + data.bg + ")";
                document.getElementById(id).style.backgroundColor = data.bg;
            }
        }

        if(data.elevation && ignoreProps.indexOf("elevation") === -1) {
            if(typeof data.elevation === "string") document.getElementById(id).style.boxShadow = data.elevation;
            if(typeof data.elevation === "number") document.getElementById(id).classList.add(`elevation-${data.elevation}`);
        }

        if(data.optional && ignoreProps.indexOf("optional") === -1) {
            for(let i = 0; i < data.optional.length; i++) {
                if(data.optional[i].id) {
                    //TODO create new Button(data, id, undefined, mainId)
                    let container = document.querySelector(`#${id} nav`);
                    let newButton = document.createElement("button");
                    newButton.setAttribute("class", "optional button");
                    newButton.setAttribute("id", data.optional[i].id);
                    container.prepend(newButton);

                    if(data.optional[i].html) document.getElementById(data.optional[i].id).innerHTML += data.optional[i].html;
                } else {
                    console.warn("[SCOmponent UI warn]: Optional element must have id!");
                }
            }
        }
        if(data.action && ignoreProps.indexOf("action") === -1) {
            document.querySelector(`#${id}`).innerHTML += `
                <nav class="sco-items"></nav>
            `;
            for(let i = 0; i < data.action.length; i++) {
               if(data.action[i].id) {
                   document.querySelector(`#${id} nav[class='sco-items']`).innerHTML += `
                    <button class="button" id=${data.action[i].id}></button>
                   `;

                   if(data.action[i].html) document.getElementById(data.action[i].id).innerHTML += data.action[i].html;

               } else console.warn("[SCOmponent UI warn]: Action element must have id!");
            }
        }
        if(data.overflow && ignoreProps.indexOf("overflow") === -1) {
            if(typeof data.overflow === "boolean") {
                if(data.overflow) document.getElementById(id).innerHTML += `<button class="button"></button>`;
            } else if(typeof data.overflow === "object") {
                if(data.overflow.button) document.getElementById(id).innerHTML += `<button class="button" id="overflow"></button>`;
                if(data.overflow.html) document.getElementById("overflow").innerHTML += data.overflow.html;
                if(data.overflow.overflow) document.getElementById("overflow").style.display = "none";
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
    }
}