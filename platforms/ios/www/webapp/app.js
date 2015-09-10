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
          .when('/dashboard', {
            templateUrl: 'webapp/views/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
          })
          .when('/tabs', {
            templateUrl: 'webapp/views/tabs.html',
            controller: 'TabsCtrl',
            controllerAs: 'tabs'
          })
          .when('/api', {
            templateUrl: 'webapp/views/api-consume.html',
            controller: 'ApiConsumeCtrl',
            controllerAs: 'apicons'
          })
          .when('/dialogs', {
            templateUrl: 'webapp/views/dialogs.html',
            controller: 'dialogsCtrl',
            controllerAs: 'dialogs'
          })
          .when('/cards', {
            templateUrl: 'webapp/views/cards.html',
            controller: 'CardsCtrl',
            controllerAs: 'cards'
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
          .when('/auth/login', {
            templateUrl: 'webapp/views/auth/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
          });


        $routeProvider.otherwise({redirectTo: '/tabs'});
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
