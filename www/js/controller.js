(function (angular) {
    'use strict';

    angular.module('AssemanyCordovaStarter.controllers', ['AssemanyCordovaStarter.restServices','ngSanitize'])
          .controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout','$log', '$location', '$translate',  function($scope, $mdSidenav, $timeout, $log, $location, $translate) {

            var itensMenu = [
              {
                  nome: 'View A',
                  icone: 'grade',
                  //iconeCor: 'red',
                  view: 'viewA'
              },
              {
                  nome: 'View B',
                  icone: 'done',
                  //iconeCor: 'pink',
                  view: 'viewB'
              },
              {
                  nome: 'Dialogs',
                  icone: 'chat',
                  //iconeCor: 'pink',
                  view: 'dialogs'
              },
            ];

            $scope.selected = null;
            $scope.itensMenu = itensMenu;
            $scope.selecionaItem = selecionaItem;
            $scope.habilitaMenu = habilitaMenu;
            $scope.changeLanguage = changeLanguage;

            function habilitaMenu(name) {
              $mdSidenav(name).toggle();
            }

            function selecionaItem(itemView) {
              $scope.selected = angular.isNumber(itemView) ? $scope.itensMenu[itemView.index] : itemView;
              $location.path(itemView);
              $scope.habilitaMenu('left');
            }

            function changeLanguage(langKey) {
              $translate.use(langKey);
            };

        }])
        .controller('TesteCtrl', ['$scope', '$rootScope', '$window', '$location', '$filter', function ($scope, $rootScope, $window, $location, $filter) {

        }])
        .controller('PaginaACtrl', function ($scope,$mdSidenav,$mdUtil) {

        })
        .controller('PaginaBCtrl', function(Post) {

          var vm = this;

          //$scope.posts = [];

          vm.posts = [];
          Post.query(function(data) {
            vm.posts = data;
          });
          //console.log($scope.posts);

        })
        .controller('dialogsCtrl', ['$scope', '$mdDialog', '$filter', function($scope, $mdDialog, $filter) {
          $scope.status = '  ';
          $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title($filter('translate')('MESSAGE'))
                .content('Texto do alerta aqui.')
                .ariaLabel('Demonstração de alerta')
                .ok('Entendi!')
                .targetEvent(ev)
            );
          };
          $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title($filter('translate')('MESSAGE'))
                  .content('Escolha uma das opções.')
                  .ariaLabel('Lucky day')
                  .ok('Sim!')
                  .cancel('Não')
                  .targetEvent(ev);
            $mdDialog.show(confirm).then(function() {
              $scope.status = 'Você clicou em sim.';
            }, function() {
              $scope.status = 'Você clicou em não.';
            });
          };
        }]);

}(angular));
