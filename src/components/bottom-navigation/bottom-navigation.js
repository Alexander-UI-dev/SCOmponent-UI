import "./bottom-navigation.css"

export class BottomNavigation {
    constructor(data, id, not_new_bottomNavigation, mainId) {
        if(not_new_bottomNavigation === undefined) {
            document.getElementById(mainId).innerHTML += `
                <nav class="sco-bottom" id=${id}>
                    <a class="sco-bottom__link  sco-bottom__link--active">
                        <i class="fa fa-heart sco-bottom__icon" aria-hidden="true"></i>
                        <span class="sco-bottom__text">Favorite</span>
                    </a>
                    <a class="sco-bottom__link">
                        <i class="fa fa-refresh sco-bottom__icon" aria-hidden="true"></i>
                        <span class="sco-bottom__text">Refresh</span>
                    </a>
                    <a class="sco-bottom__link">
                        <i class="fa fa-map-marker sco-bottom__icon" aria-hidden="true"></i>
                        <span class="sco-bottom__text">Favorite</span>
                    </a>
                </nav>
            `;
        }
    }
}