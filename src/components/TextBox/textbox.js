import "./textbox.css"
let all_data;
export class TextBox {
    is_a_label = false;
    constructor(data, id, not_new_textBox, mainId) {
        this.lor = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta molestias in quaerat! Velit dolorum cum ullam, aliquam beatae optio impedit quo ut? Obcaecati officia magni molestiae assumenda dolorem? Explicabo, nulla?`;
        let ignoreProps = data.ignore !== undefined ? data.ignore : [];
        if(not_new_textBox === undefined) {
            all_data = data;
            if(data.label) {
                this.is_a_label = true;
                document.getElementById(mainId).innerHTML += `
                    <label id=${id} class="sco-text_box-default"></label>
                `;
            }
            else if(data.type) {
                if(
                    data.type !== "h1" || data.type !== "h2" || data.type !== "h3" ||
                    data.type !== "h4" || data.type !== "h5" || data.type !== "h6"
                ) {console.warn("[SCOmponent UI warn] Type must have value === h1-h6!")}
                document.getElementById(mainId).innerHTML += `
                    <${data.type} id=${id} class="sco-text_box-default"></${data.type}>
                `;
            }
            else {
                document.getElementById(mainId).innerHTML += `
                    <div id=${id} class="sco-text_box-default"></div>
                `;
            }
        }
        if(data.text && ignoreProps.indexOf("text") === -1) {
            if(data.text === 1) document.getElementById(id).textContent = this.lor;
            else document.getElementById(id).textContent = data.text;
        }
        if(data.label_for && this.is_a_label && ignoreProps.indexOf("label_for") === -1) document.getElementById(id).setAttribute("for", data.label_for);
        if(data.color && ignoreProps.indexOf("color") === -1) {
            if(data.color.charAt(0) !== "-")
                document.getElementById(id).style.color = data.color;
            else {
                data.color = "var(" + data.color + ")";
                document.getElementById(id).style.color = data.color;
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
        if(data.width && ignoreProps.indexOf("width") === -1) document.getElementById(id).style.width = data.width;
        if(data.height && ignoreProps.indexOf("height") === -1) document.getElementById(id).style.height = data.height;
        if(data.min_width && ignoreProps.indexOf("min_width") === -1) document.getElementById(id).style.minWidth = data.min_width;
        if(data.min_height && ignoreProps.indexOf("min_height") === -1) document.getElementById(id).style.minHeight = data.min_height;
        if(data.max_width && ignoreProps.indexOf("max_width") === -1) document.getElementById(id).style.maxWidth = data.max_width;
        if(data.max_height && ignoreProps.indexOf("max_height") === -1) document.getElementById(id).style.maxHeight = data.max_height;

        if(data.font && ignoreProps.indexOf("font") === -1) {
            if(data.font.size && ignoreProps.indexOf("font.size") === -1) document.getElementById(id).style.fontSize = data.font.size;
            if(data.font.family && ignoreProps.indexOf("font.family") === -1) document.getElementById(id).style.fontFamily = data.font.family;
            if(data.font.align && ignoreProps.indexOf("font.align") === -1) document.getElementById(id).style.textAlign = data.font.align;
            if(data.font.weight && ignoreProps.indexOf("font.weight") === -1) document.getElementById(id).style.fontWeight = data.font.weight;
            if(data.font.style && ignoreProps.indexOf("font.style") === -1) document.getElementById(id).style.fontStyle = data.font.style;
            if(data.font.transform && ignoreProps.indexOf("font.transform") === -1) document.getElementById(id).style.textTransform = data.font.transform;
            if(data.font.decoration && ignoreProps.indexOf("font.decoration") === -1) document.getElementById(id).style.textDecoration = data.font.decoration;
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

        if(data.elevation && ignoreProps.indexOf("elevation") === -1) {
            if(typeof data.elevation === "string") document.getElementById(id).style.boxShadow = data.elevation;
            if(typeof data.elevation === "number") document.getElementById(id).classList.add(`elevation-${data.elevation}`);
        }

        if(data.line && ignoreProps.indexOf("line") === -1) document.getElementById(id).style.lineHeight = data.line;
        if(data.spacing && ignoreProps.indexOf("spacing") === -1) document.getElementById(id).style.letterSpacing = data.spacing;
        if(data.quantity && ignoreProps.indexOf("quantity") === -1) {
            if(data.quantity === "default") document.getElementById(id).classList.add("sco-text_box");
            else {
                document.getElementById(id).classList.add("sco-text_box");
                document.getElementById(id).style.setProperty("--quantity", data.quantity);
            }
        }

        if(data.object_cls && ignoreProps.indexOf("object_cls") === -1) {
            if(document.getElementById(id).hasAttribute("class")) document.getElementById(id).classList.add(data.object_cls);
            else document.getElementById(id).setAttribute("class", data.object_cls);
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

        if(data.select !== undefined && ignoreProps.indexOf("select") === -1) {
            if(data.select === false) document.getElementById(id).style.userSelect = "none";
            else if(data.select === true) document.getElementById(id).style.userSelect = "auto";
            else document.getElementById(id).style.userSelect = data.select;
        }

        if(data.rounded) {
            if(data.rounded === "circle") document.getElementById(id).classList.add("sco-text_box__circle");
            if(data.rounded === "xs") document.getElementById(id).classList.add("sco-text_box__rounded-xs");
            if(data.rounded === "sm") document.getElementById(id).classList.add("sco-text_box__rounded-sm");
            if(data.rounded === "lg") document.getElementById(id).classList.add("sco-text_box__rounded-lg");
            if(data.rounded === "xl") document.getElementById(id).classList.add("sco-text_box__rounded-xl");
            else if (
                data.rounded !== "xl" && data.rounded !== "lg" &&
                data.rounded !== "default" && data.rounded !== "sm" && data.rounded !== "xs" &&
                data.rounded !== "circle"
            ) document.getElementById(id).style.borderRadius = data.rounded;
        }
    }
}