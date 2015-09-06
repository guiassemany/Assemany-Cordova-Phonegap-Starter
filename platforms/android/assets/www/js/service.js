(function (angular) {
    'use strict';
    angular.module('AssemanyCordovaStarter.restServices', ['ngResource'])

    .service("testeService",["$q","$http", function ($q,$http) {



    }])
    .factory("Post", function($resource) {
      return $resource("http://jsonplaceholder.typicode.com/posts");

    });
    ;

}(angular));
