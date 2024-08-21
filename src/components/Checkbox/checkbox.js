import "./checkbox.css"
let all_data;

export class Checkbox {
    constructor(data, id, not_new_checkbox, mainId) {
        let ignoreProps = data.ignore !== undefined ? data.ignore : [];
        if(not_new_checkbox === undefined) {
            all_data = data;
            document.getElementById(mainId).innerHTML += `
                <label class="sco-checkbox">
                    <input type="checkbox" id=${id}>
                    <div>
                       <span style="margin-left: 5px"></span>
                    </div>
                </label>
            `;
        }

        if(data.text && ignoreProps.indexOf("text") === -1) document.getElementById(id).nextElementSibling.children[0].textContent = data.text;
        if(data.font && ignoreProps.indexOf("font") === -1) {
            if (data.font.family && ignoreProps.indexOf("font.family") === -1) document.getElementById(id).nextElementSibling.children[0].style.fontFamily = data.font.family;
            if (data.font.size && ignoreProps.indexOf("font.size") === -1) document.getElementById(id).nextElementSibling.children[0].style.fontSize = data.font.size;
            if (data.font.weight && ignoreProps.indexOf("font.weight") === -1) document.getElementById(id).nextElementSibling.children[0].style.fontWeight = data.font.weight;
            if (data.font.style && ignoreProps.indexOf("font.style") === -1) document.getElementById(id).nextElementSibling.children[0].style.fontStyle = data.font.style;
            if (data.font.transform && ignoreProps.indexOf("font.transform") === -1) document.getElementById(id).nextElementSibling.children[0].style.textTransform = data.font.transform;
            if (data.font.decoration && ignoreProps.indexOf("font.decoration") === -1) document.getElementById(id).nextElementSibling.children[0].style.textDecoration = data.font.decoration;
        }

        if(data.border) {
            if (typeof data.border === "string" && ignoreProps.indexOf("border") === -1) document.getElementById(id).parentElement.style.border = data.border;
            if (typeof data.border === "object") {
                if (data.border) {
                    if (data.border.top && ignoreProps.indexOf("border.top") === -1) document.getElementById(id).parentElement.style.borderTop = data.border.top;
                    if (data.border.bottom && ignoreProps.indexOf("border.bottom") === -1) document.getElementById(id).parentElement.style.borderBottom = data.border.bottom;
                    if (data.border.left && ignoreProps.indexOf("border.left") === -1) document.getElementById(id).parentElement.style.borderLeft = data.border.left;
                    if (data.border.right && ignoreProps.indexOf("border.right") === -1) document.getElementById(id).parentElement.style.borderRight = data.border.right;
                }
            }
        }

        if(data.margin) {
            if(typeof data.margin === "string" && ignoreProps.indexOf("margin") === -1) document.getElementById(id).parentElement.style.margin = data.margin;
            if(typeof data.margin === "object") {
                if(data.margin.top && ignoreProps.indexOf("margin.top") === -1) document.getElementById(id).parentElement.style.marginTop = data.margin.top;
                if(data.margin.left && ignoreProps.indexOf("margin.left") === -1) document.getElementById(id).parentElement.style.marginRight = data.margin.left;
                if(data.margin.right && ignoreProps.indexOf("font.right") === -1) document.getElementById(id).parentElement.style.marginLeft = data.margin.right;
                if(data.margin.bottom && ignoreProps.indexOf("margin.bottom") === -1) document.getElementById(id).parentElement.style.marginTop = data.margin.bottom;
            }
        }

        if(data.padding) {
            if(typeof data.padding === "string" && ignoreProps.indexOf("padding") === -1) document.getElementById(id).parentElement.style.padding = data.padding;
            if(typeof data.padding === "object") {
                if(data.padding.top && ignoreProps.indexOf("padding.top") === -1) document.getElementById(id).parentElement.style.paddingTop = data.padding.top;
                if(data.padding.left && ignoreProps.indexOf("padding.left") === -1) document.getElementById(id).parentElement.style.paddingRight = data.padding.left;
                if(data.padding.right && ignoreProps.indexOf("padding.right") === -1) document.getElementById(id).parentElement.style.paddingLeft = data.padding.right;
                if(data.padding.bottom && ignoreProps.indexOf("padding.bottom") === -1) document.getElementById(id).parentElement.style.paddingTop = data.padding.bottom;
            }
        }

        if(data.wrap && ignoreProps.indexOf("wrap") === -1) {
            if(typeof data.wrap === "function") {
                let returns = data.wrap(document.getElementById(id), all_data);
                document.getElementById(id).parentElement.remove()
                document.getElementById(mainId).innerHTML += returns;
            } else {
                throw new TypeError("Error! Wrap must have type function!");
            }
        }

        if(data.select !== undefined && ignoreProps.indexOf("select") === -1) {
            if(data.select === false) document.getElementById(id).nextElementSibling.children[0].style.userSelect = "none";
            else if(data.select === true) document.getElementById(id).nextElementSibling.children[0].style.userSelect = "auto";
            else document.getElementById(id).nextElementSibling.children[0].style.userSelect = data.select;
        }

        if(data.bg && ignoreProps.indexOf("bg") === -1) {
            if(data.bg.charAt(0) !== "-") document.getElementById(id).parentElement.style.setProperty("--accent-color", data.bg);
            else {
                data.bg = "var(" + data.bg + ")";
                document.getElementById(id).parentElement.style.setProperty("--accent-color", data.bg);
            }
        }

        if(data.color && ignoreProps.indexOf("color") === -1) {
            if(data.color.charAt(0) !== "-") document.getElementById(id).nextElementSibling.children[0].style.color = data.color;
            else {
                data.color = "var(" + data.color + ")";
                document.getElementById(id).nextElementSibling.children[0].style.color = data.color;
            }
        }

        if(data.hover_color && data.hover_color !== "default" && ignoreProps.indexOf("hover_color") === -1) {
            if(data.hover_color.charAt(0) !== "-") document.getElementById(id).style.backgroundColor = data.hover_color;
            else {
                data.hover_color = "var(" + data.hover_color + ")";
                document.getElementById(id).style.backgroundColor = data.hover_color;
            }
        }

        if(data.checkmark_color && data.checkmark_color !== "default" && ignoreProps.indexOf("checkmark_color") === -1) {
            if(data.checkmark_color.charAt(0) !== "-") document.getElementById(id).parentElement.style.setProperty("--checkmark-color", data.checkmark_color);
            else {
                data.checkmark_color = "var(" + data.checkmark_color + ")";
                document.getElementById(id).parentElement.style.setProperty("--checkmark-color", data.checkmark_color);
            }
        }

        if(data.check && ignoreProps.indexOf("check") === -1) document.getElementById(id).setAttribute("checked", data.check);
        if(data.disabled && ignoreProps.indexOf("disabled") === -1) document.getElementById(id).setAttribute("disabled", data.disabled);
    }
}


