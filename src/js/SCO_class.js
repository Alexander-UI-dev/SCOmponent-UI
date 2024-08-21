import {ScoComponent} from "../ui";
import {error} from "./error";

let isArraySlot;
let arrSlots = [];

function analyzerSlot(obj, id, isArray, mainId) {
    if(Array.isArray(obj.slots)) {
        if(!isArray) {
            isArraySlot = false;
            for(let i = 0; i < obj.slots.length; i++) {
                if(obj.slots[i].name === obj.children[id].slot) {
                    let p = new Proxy(obj.children[id], {
                        set(target, props, newValue) {
                            obj.children[id][props] = newValue;
                            console.log("Render component...(Slot)");
                            new ScoComponent({[props]: newValue}, obj.children[id].cls, id, true, mainId);
                            return true;
                        }
                    });
                    p[obj.slots[i].key] = obj.slots[i].value;
                    arrSlots.push(obj.slots[i]);
                }
            }
        }
        if(isArray) {
            isArraySlot = true;
        }
    } else {
        throw new TypeError("Error! Slots must have type === array!")
    }
}

function renderComponents(obj, children, mainId) {
    for(const [key, value] of Object.entries(children)) {
        if(value.cls) {
            console.log("Add component...(main)");
            new ScoComponent(value, value.cls, key, undefined, mainId);
        }
        if(value.slot) {
            if(!obj.slots) throw new ReferenceError("Error! You can't reference a slot that doesn't exist! Slots === undefined.");
            if(!Array.isArray(value.slot))
                analyzerSlot(obj, key, false, mainId);
            else if(Array.isArray(value.slot))
                analyzerSlot(obj, key, true, mainId);
            else throw new TypeError("Error! Slot must have type === array|string!");
        }
    }
}

export class SCO {
    #obj
    #id;

    constructor(root) {
        this.#id = root
    }

    //methods
    createApp(data) {
        this.#obj = data;
        if (data.children) {
            if (typeof data.children === "object") renderComponents(data, data.children, this.#id);
            else throw new TypeError("Error! Children must have type object!");
        }
    }

    launch(fn, sco) {
        document.addEventListener("DOMContentLoaded", () => {
            try {
                fn(sco);
            } catch (err) {
                error(err);
            }
        });
    }
    getObjectByName(name, obj = this.#obj) {
        let ob = obj;
        let arr = [];
        if(ob.name === name) arr.push(ob);
        function searchName(myObj) {
            for(const [key, value] of Object.entries(myObj)) {
                if(typeof value === "object") {
                    if(value.hasOwnProperty('name')) {
                        if(value.name === name) arr.push(value);
                    }
                    searchName(value)
                }
            }
        }
        searchName(ob);
        return arr[0];
    }

    searchHTML(id, isSelector = false) {
        if(isSelector) return document.querySelector(id);
        else return document.getElementById(id);
    }
    strHTML(el) {return el.outerHTML};
    duplicate(fn, col) {
        for(let i = 0; i <= col; i++) {
            fn()
        }
    }
}