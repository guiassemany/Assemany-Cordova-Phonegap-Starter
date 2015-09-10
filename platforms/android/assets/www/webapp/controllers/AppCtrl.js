acs.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout','$log', '$location', '$translate', '$filter',  function($scope, $mdSidenav, $timeout, $log, $location, $translate, $filter) {
            var itensMenu = [
              {
                  nome: 'DASHBOARD',
                  icone: 'dashboard',
                  //iconeCor: 'pink',
                  view: '/dashboard'
              },
              {
                  nome: 'TABS',
                  icone: 'tab',
                  //iconeCor: 'red',
                  view: 'tabs'
              },
              {
                  nome: 'RESTFULL_TEST',
                  icone: 'sync',
                  //iconeCor: 'pink',
                  view: 'api'
              },
              {
                  nome: 'DIALOGS',
                  icone: 'chat',
                  //iconeCor: 'pink',
                  view: 'dialogs'
              },
              {
                  nome: 'CARDS',
                  icone: 'view_stream',
                  //iconeCor: 'pink',
                  view: '/cards'
              },
              {
                  nome: 'CAMERA',
                  icone: 'camera',
                  //iconeCor: 'pink',
                  view: '/plugin/camera'
              },
              {
                  nome: 'DEVICE_INFO',
                  icone: 'perm_device_info',
                  //iconeCor: 'pink',
                  view: '/plugin/deviceInfo'
              }
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

        }]);
