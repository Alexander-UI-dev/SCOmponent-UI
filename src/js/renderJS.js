export function onRipple(id, el, obj) {
    if(obj.target === "button" || obj.target === "app-bar") {
        document.getElementById(id).addEventListener("click", e => {
            if (e.target.closest(el) === null) return;
            let ripples = document.createElement('span');
            ripples.style.left = e.layerX + "px";
            ripples.style.top = e.layerY + "px";
            ripples.setAttribute('class', 'ripples-small');
            e.target.closest(el).appendChild(ripples);
            setTimeout(() => {
                ripples.remove();
            }, 700);
        })
    } else if(obj.target === "bottom-navigation") {
        document.getElementById(id).addEventListener("click", e => {
            if(e.target.closest(el) === null) return;
            if(!e.target.closest(el).classList.contains("sco-bottom__link--active")) {
                document.querySelector(`#${obj.id} .sco-bottom__link--active`).classList.remove("sco-bottom__link--active");
                e.target.closest(el).classList.add("sco-bottom__link--active");
            }
            let ripples = document.createElement('span');
            ripples.style.left = e.layerX + "px";
            ripples.style.top = e.layerY + "px";
            ripples.setAttribute('class', 'ripples-big');
            e.target.closest(el).appendChild(ripples);
            setTimeout(() => {
                ripples.remove();
            }, 700);
        })
    }
}
