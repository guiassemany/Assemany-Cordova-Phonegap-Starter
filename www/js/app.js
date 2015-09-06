(function (angular) {
    'use strict';
    angular.module('AssemanyCordovaStarter', [
        'ngTouch',
        'ngRoute',
        'ngAnimate',
        'AssemanyCordovaStarter.controllers',
        'ngMaterial',
        'ngMdIcons',
        'pascalprecht.translate'
    ])
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/viewA', {
            templateUrl: 'views/paginaA.html',
            controller: 'PaginaACtrl',
            controllerAs: 'pagina'
          })
          .when('/viewB', {
            templateUrl: 'views/paginaB.html',
            controller: 'PaginaBCtrl',
            controllerAs: 'paginab'
          })
          .when('/dialogs', {
            templateUrl: 'views/dialogs.html',
            controller: 'dialogsCtrl',
            controllerAs: 'dialogs'
          });


        $routeProvider.otherwise({redirectTo: '/viewA'});
        //$locationProvider.html5Mode(true);

    }])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
    })
    .config(function ($compileProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http|ftp|mailto|file|tel):/);
    })
    .config(function($translateProvider) {

      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
      });

    });

}(angular));
