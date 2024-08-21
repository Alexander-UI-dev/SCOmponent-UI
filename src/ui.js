//css imports components
import "../src/css/variable.css";
import "../public/font-awesome-4.7.0/css/font-awesome.min.css"
//js imports components
import {Button} from "./components/Button/button";
import {Checkbox} from "./components/Checkbox/checkbox";
import {Divider} from "./components/Divider/divider";
import {TextBox} from "./components/TextBox/textbox";
import {Breadcrumbs} from "./components/breadcrumbs/breadcrumbs";
import {AppBar} from "./components/app-bar/app-bar";
import {BottomNavigation} from "./components/bottom-navigation/bottom-navigation";
import {onRipple} from "./js/renderJS";

export class ScoComponent {
    constructor(data, cls, id, not_new_component, mainId) {
        if(cls === "Button") {
            new Button(data, id, not_new_component, mainId);
        }
        if(cls === "Checkbox") new Checkbox(data, id, not_new_component, mainId);
        if(cls === "Divider") new Divider(data, id, not_new_component, mainId);
        if(cls === "TextBox") new TextBox(data, id, not_new_component, mainId);
        if(cls === "Breadcrumbs") new Breadcrumbs(data, id, not_new_component, mainId);
        if(cls === "AppBar") {
            new AppBar(data, id, not_new_component, mainId);
            if(not_new_component === undefined)
                onRipple(mainId, 'header button', {target: "app-bar", id: id});
        }
        if(cls === "BottomNavigation") {
            new BottomNavigation(data, id, not_new_component, mainId);
            if(not_new_component === undefined)
                onRipple(mainId, "nav a", {target: "bottom-navigation", id: id});
        }
    }
}




