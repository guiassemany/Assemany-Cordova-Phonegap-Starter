'use strict';

var acs = angular.module('AssemanyCordovaStarter', [
      'ngTouch',
      'ngAnimate',
      'ngCordova',
      'ngResource',
      'ngMaterial',
      'ngMdIcons',
      'pascalprecht.translate',
      'ui.router'
]);

    angular.module('AssemanyCordovaStarter')
    .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /tabs while there is no dashboard page
    $urlRouterProvider.otherwise("/tabs");

    // Now set up the states
    $stateProvider
      .state('dashboard', {
      url: "/dashboard",
      templateUrl: "webapp/views/dashboard.html",
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
      })
      .state('tabs', {
        url: "/tabs",
        templateUrl: "webapp/views/tabs.html",
        controller: 'TabsCtrl',
        controllerAs: 'tabs'
      })
      .state('api', {
        url: "/api",
        templateUrl: "webapp/views/api.html",
        controller: 'ApiCtrl',
        controllerAs: 'api'
      })
      .state('apiPosts', {
        url: "/api/posts",
        templateUrl: "webapp/views/posts.html",
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .state('apiCars', {
        url: "/api/cars",
        templateUrl: "webapp/views/cars.html",
        controller: 'CarsCtrl',
        controllerAs: 'cars'
      })
      .state('apiShowCar', {
        url: "/api/car/:carId",
        templateUrl: "webapp/views/car-detail.html",
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .state('dialogs', {
        url: "/dialogs",
        templateUrl: "webapp/views/dialogs.html",
        controller: 'dialogsCtrl',
        controllerAs: 'dialogs'
      })
      .state('cards', {
        url: "/cards",
        templateUrl: "webapp/views/cards.html",
        controller: 'CardsCtrl',
        controllerAs: 'cards'
      })
      .state('camera', {
        url: "/plugins/camera",
        templateUrl: "webapp/views/plugins/picture.html",
        controller: 'PictureCtrl',
        controllerAs: 'picture'
      })
      .state('deviceInfo', {
        url: "/plugins/deviceInfo",
        templateUrl: "webapp/views/plugins/deviceInfo.html",
        controller: 'DeviceInfoCtrl',
        controllerAs: 'device'
      })
      .state('login', {
        url: "/auth/login",
        templateUrl: "webapp/views/auth/login.html",
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
    })
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('amber').dark();
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
