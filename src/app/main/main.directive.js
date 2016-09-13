class MainController {
    constructor(SharedData) {
        'ngInject';

        this.SharedData = SharedData;
        this.SharedData.isCollapsed = false;
        this.SharedData.CareerResource = false;
        this.SharedData.Diversity = false;
        this.SharedData.About = false;
    }

    closeFilters() {
        var $portalCanvas = document.querySelector('.portal-canvas');
        var $mask = document.querySelector('#mask');

        if ($portalCanvas) {
            $portalCanvas.classList.remove('show-nav');
        }

        if ($mask) {
            $mask.classList.remove('active');
        }
    }
    closeCollapse() {
        console.log(this.SharedData.isCollapsed);
        this.SharedData.isCollapsed = !this.SharedData.isCollapsed;
    }
}

class Main {
    constructor() {
        'ngInject';

        let directive = {
            restrict: 'E',
            templateUrl: 'app/main/main.html',
            scope: false,
            controller: MainController,
            controllerAs: 'main',
            bindToController: true,
            replace: true
        };

        return directive;
    }
}

export default Main;