'use strict';

var acs = angular.module('AssemanyCordovaStarter', [
      'ngTouch',
      'ngRoute',
      'ngAnimate',
      'ngCordova',
      'ngResource',
      'ngMaterial',
      'ngMdIcons',
      'pascalprecht.translate'
]);

    angular.module('AssemanyCordovaStarter')
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/viewA', {
            templateUrl: 'webapp/views/paginaA.html',
            controller: 'PaginaACtrl',
            controllerAs: 'pagina'
          })
          .when('/viewB', {
            templateUrl: 'webapp/views/paginaB.html',
            controller: 'PaginaBCtrl',
            controllerAs: 'paginab'
          })
          .when('/dialogs', {
            templateUrl: 'webapp/views/dialogs.html',
            controller: 'dialogsCtrl',
            controllerAs: 'dialogs'
          })
          .when('/plugin/camera', {
            templateUrl: 'webapp/views/plugins/picture.html',
            controller: 'PictureCtrl',
            controllerAs: 'picture'
          })
          .when('/plugin/deviceInfo', {
            templateUrl: 'webapp/views/plugins/deviceInfo.html',
            controller: 'DeviceInfoCtrl',
            controllerAs: 'device'
          })
          ;


        $routeProvider.otherwise({redirectTo: '/viewA'});
        //$locationProvider.html5Mode(true);

    }])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('deep-orange');
    })
    .config(function ($compileProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http|ftp|mailto|file|tel):/);
    })
    .config(function($translateProvider) {

      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.useStaticFilesLoader({
        prefix: 'webapp/languages/',
        suffix: '.json'
      });

    });
