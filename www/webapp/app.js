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
            templateUrl: 'webapp/views/api.html',
            controller: 'ApiCtrl',
            controllerAs: 'api'
          })
          .when('/api/posts', {
            templateUrl: 'webapp/views/posts.html',
            controller: 'PostsCtrl',
            controllerAs: 'posts'
          })
          .when('/api/cars', {
            templateUrl: 'webapp/views/cars.html',
            controller: 'CarsCtrl',
            controllerAs: 'cars'
          })
          .when('/api/car/:carId', {
            templateUrl: 'webapp/views/car-detail.html',
            controller: 'CarCtrl',
            controllerAs: 'car'
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
