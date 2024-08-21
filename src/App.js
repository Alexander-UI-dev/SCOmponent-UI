import {SCO} from "./js/SCO_class";
const Sco = new SCO("main");


Sco.launch(function initApp(Sco) {
    Sco.createApp({
        name: "main-app",
        main_page: true,
        slots: [{
            name: 'setTitle',
            key: "title",
            value: "App bar"
        }],
        children: {
            "app-bar1": {
                cls: "AppBar",
                title: "App bar",
                slot: "setTitle",
                optional: [{
                    id: "optional1",
                    html: "<i class='fa fa-bars' aria-hidden='true'></i>"
                }],
                action: [{
                    id: "action1",
                    html: "<i class='fa fa-search' aria-hidden='true'></i>"
                }, {
                    id: "action2",
                    html: "<i class='fa fa-heart' aria-hidden='true'></i>"
                }],
                elevation: 2
            },
            "text1": {
                cls: "TextBox",
                text: "1 Приложение",
                font: {
                    family: "sans-serif",
                    weight: "bold",
                    size: "30px"
                }
            },
            "breadcrumbs1": {
                cls: "Breadcrumbs",
                items: [{
                    id: "item1",
                    text: "Home",
                    href: "#"
                }, {
                    id: "item2",
                    text: "Media",
                    href: "#"
                }, {
                    id: "item3",
                    text: "Photos",
                    href: "#"
                }, {
                    id: "item4",
                    text: "Liza_photos.png",
                    active: true
                }]
            },
            "check1": {
                cls: "Checkbox",
                text: "My checkbox",
                bg: "--cyan",
                font: {
                    family: "sans-serif",
                    size: "17px"
                },
                select: false
            },
            "divider1": {
                cls: "Divider"
            },
            "bottom1": {
                cls: "BottomNavigation"
            }
        }
    })
    Sco.duplicate((i) => {
        return {

        }
    })
}, Sco);