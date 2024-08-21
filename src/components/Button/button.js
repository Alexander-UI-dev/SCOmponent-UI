export class Button {
    constructor(data, id, not_new_button, mainId) {
        if(not_new_button === undefined) {
            if(data.href) {
                if(data.target) {
                    document.getElementById(mainId).innerHTML += `
                
                    `;
                } else {

                }
            } else {

            }
        }
    }
}