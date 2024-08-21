import "./divider.css"
let all_data;
export class Divider {
    constructor(data, id, not_new_divider, mainId) {
        let ignoreProps = data.ignore !== undefined ? data.ignore : [];
        if(not_new_divider === undefined) {
            all_data = data;
            document.getElementById(mainId).innerHTML += `
                <div>
                    <hr class="sco-dividers" id=${id} style="border-top-width: 1px"/>
                </div>
            `;
        }
        if(data.color && ignoreProps.indexOf("color") === -1) {
            if(data.color.charAt(0) !== "-")
                document.getElementById(id).style.color = data.color;
            else {
                data.color = "var(" + data.color + ")";
                document.getElementById(id).style.color = data.color;
            }
        }
        if(data.opacity && ignoreProps.indexOf("opacity") === -1) document.getElementById(id).style.opacity = data.opacity;
        if(data.thickness && ignoreProps.indexOf("thickness") === -1) document.getElementById(id).style.borderTopWidth = data.thickness;
        if(data.length && ignoreProps.indexOf("length") === -1) document.getElementById(id).style.width = data.length;
        if(data.max_length && ignoreProps.indexOf("max_length") === -1) document.getElementById(id).style.maxWidth = data.max_length;
        if(data.min_length && ignoreProps.indexOf("min_length") === -1) document.getElementById(id).style.minWidth = data.min_length;
        if(data.rotate && ignoreProps.indexOf("rotate")) {
            if(data.rotate === "vertical") document.getElementById(id).style.rotate = "90deg";
            else if(data.rotate === "horizontal") document.getElementById(id).style.rotate = "0";
            else document.getElementById(id).style.rotate = data.rotate;
        }
        if(data.margin && ignoreProps.indexOf("margin")) {
            if(data.margin.left && ignoreProps.indexOf("margin.left")) document.getElementById(id).parentElement.style.marginLeft = data.margin.left;
            if(data.margin.right && ignoreProps.indexOf("margin.right")) document.getElementById(id).parentElement.style.marginRight = data.margin.right;
            if(data.margin.bottom && ignoreProps.indexOf("margin.bottom")) document.getElementById(id).parentElement.style.marginBottom = data.margin.bottom;
            if(data.margin.top && ignoreProps.indexOf("margin.top")) document.getElementById(id).parentElement.style.marginTop = data.margin.top;
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
        if(data.padding && ignoreProps.indexOf("padding") === -1) {
            if(data.padding.left && ignoreProps.indexOf("padding.left") === -1) document.getElementById(id).parentElement.style.paddingLeft = data.padding.left;
            if(data.padding.right && ignoreProps.indexOf("padding.right") === -1) document.getElementById(id).parentElement.style.paddingRight = data.padding.right;
            if(data.padding.bottom && ignoreProps.indexOf("padding.bottom") === -1) document.getElementById(id).parentElement.style.paddingBottom = data.padding.bottom;
            if(data.padding.top && ignoreProps.indexOf("padding.top") === -1) document.getElementById(id).parentElement.style.paddingTop = data.padding.top;
        }
        if(data.type) {
            if(data.type !== "dotted" && data.type !== "dashed" && data.type !== "double" &&
                data.type !== "groove" && data.type !== "default"
            ) console.warn("[SCOmponent UI warn] Type must have value === (css borders style)");
            if(data.type === "default") document.getElementById(id).style.borderTopStyle = "solid";
            document.getElementById(id).style.borderTopStyle = data.type;
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
    }
}