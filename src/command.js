const fs = require('fs');
const path = require('path');
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Введите имя проекта >> '
});

rl.prompt();

rl.on('line', (input) => {
    fs.mkdirSync(input);
    fs.mkdirSync(path.resolve(input, "public"));
    fs.mkdirSync(path.resolve(input, "src"));
    fs.mkdirSync(path.resolve(input, "src", "css"));
    fs.mkdirSync(path.resolve(input, "src", "js"));
    fs.writeFileSync(path.resolve(input, "public", "index.html"), `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SCOmponent UI</title>
    </head>
    <body>
        <script></script>
    </body>
</html>
    `);
    fs.writeFileSync(path.resolve(input, "src", "css", "App.css"), `/*style css*/`);
    fs.writeFileSync(path.resolve(input, "src", "js", "init.js"), `import {SCO} from "../../../src/js/SCO_class";
import {initApp} from "App";
export const Sco = new SCO('main');
Sco.launch(initApp, Sco);`);
    fs.writeFileSync(path.resolve(input, "src", "js", "App.js"), `export function initApp(Sco) {
    Sco.createApp({
        name: "main-app",
        main_page: true,
        layout: {},
        children: {
            "text1": {
                cls: "TextBox",
                text: "Hello SCOmponent UI"
            }
        }
    })
}
    `);
    fs.writeFileSync(path.resolve(input, "src", "js", "event.js"), `import {Sco} from "init";
Sco.createNewEvents({});`);
    fs.writeFileSync(path.resolve(input, "src", "js", "hooks.js"), `import {Sco} from "init";
export const hooks = {
        
}`);
    fs.mkdirSync(path.resolve(input, "src", "js", "blocks"));
    fs.writeFileSync(path.resolve(input, "src", "js", "blocks", "block.js"), `import {Sco} from "../init";
Sco.sendInformation({});`);

    rl.close();
});