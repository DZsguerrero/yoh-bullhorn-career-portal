/* moment:false */
import routerConfig from './index.route';
import localeConfig from './index.locale';

import JobListController from './list/list.controller';
import JobDetailController from './detail/detail.controller';
import CareerPortalModalController from './modal/modal.controller';
import CareerPortalSidebarController from './sidebar/sidebar.controller';

import Main from './main/main.directive';
import CareerPortalSidebar from './sidebar/sidebar.directive';
import CareerPortalHeader from './header/header.directive';
import CareerPortalModal from './modal/modal.directive';

import SearchService from './services/search.service';
import MobileDetection from './services/mobiledetection.service';
import ShareService from './services/share.service';
import ApplyService from './services/apply.service';
import SharedData from './services/shared.factory';
import LinkedInService from './services/linkedin.service';
import VerifyLI from './services/verifyli.service';
import CacheService from './services/cache.service';

import StripHtmlFilter from './filters/striphtml.filter';
import OmitFiltersFilter from './filters/omitfilters.filter';
import DisplayDateFilter from './filters/displayDate.filter';

require('angulartics');

angular.module('CareerPortal', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngFileUpload', '720kb.tooltips', 'ng-fastclick', 'ngLocalize', 'ngLocalize.Config', 'ngLocalize.InstalledLanguages', 'ngLocalize.Events', 'ui.bootstrap','angulartics', require('angulartics-google-analytics')])
   .run(function($rootScope) {
    $rootScope.showLogo = true;
})
    .constant('moment', moment)
    .constant('localeConf', {})
    .constant('localeSupported', [])
    .constant('APPLIED_JOBS_KEY', 'APPLIED_JOBS_KEY')
    .config(routerConfig)
    .config(localeConfig)
    .config(function ($analyticsProvider) {
        //$analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
        $analyticsProvider.withAutoBase(true);  /* Records full path */
    })
    .directive('main', () => new Main())
    .directive('careerPortalSidebar', () => new CareerPortalSidebar())
    .directive('careerPortalHeader', () => new CareerPortalHeader())
    .directive('careerPortalModal', () => new CareerPortalModal())
    .controller('JobListController', JobListController)
    .controller('JobDetailController', JobDetailController)
    .controller('CareerPortalModalController', CareerPortalModalController)
    .controller('CareerPortalSidebarController', CareerPortalSidebarController)
    .filter('stripHtml', () => new StripHtmlFilter())
    .filter('omitFilters', () => new OmitFiltersFilter())
    .filter('displayDate', DisplayDateFilter)
    .factory('SharedData', () => new SharedData())
    .service('ShareService', ShareService)
    .service('ApplyService', ApplyService)
    .service('SearchService', SearchService)
    .service('LinkedInService', LinkedInService)
    .service('MobileDetection', MobileDetection)
    .service('VerifyLI', VerifyLI)
    .service('CacheService', CacheService);
   /* .directive('resizable', function($window,SharedData) {
  return function($scope) {
    $scope.initializeWindowSize = function() {
        console.log($window.innerWidth);
        if ($window.innerWidth > 500) {SharedData.isCollapsed = false;}
         $scope.windowHeight = $window.innerHeight;
        $scope.windowWidth = $window.innerWidth;
        return $scope;
    };
    $scope.initializeWindowSize();
    return angular.element($window).bind('resize', function() {
      $scope.initializeWindowSize();
      return $scope.$apply();
    });
  };
});*/

// Deferring the bootstrap to make sure we have loaded the config from app.json
deferredBootstrapper.bootstrap({
    element: document.body,
    module: 'CareerPortal',
    resolve: {
        configuration: function ($http) {
            'ngInject';
            return $http.get('./app.json');
        }
    }
});
