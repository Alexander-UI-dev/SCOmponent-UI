export function error(err = undefined) {
    if(err !== undefined) {
        if(err.message === "Error! Slot must have name!") {
            console.log(document.getElementsByTagName('body')[0])
            document.getElementsByTagName('body')[0].style.cssText = "height: 96vh; display: grid; place-items: center; background-color: #8d8d8d;";
            document.getElementsByTagName('body')[0].innerHTML = `<div class='error'>
                                                                    <div class='error-title'>
                                                                        <i class='fa fa-exclamation-circle'></i>
                                                                    </div>
                                                                    <div class='error-text'>Error</div>
                                                                    <div class='error-content' style='margin-left: 5px; text-align: center;'>Slot must have name!</div>
                                                                </div>`;
        }
    }
}