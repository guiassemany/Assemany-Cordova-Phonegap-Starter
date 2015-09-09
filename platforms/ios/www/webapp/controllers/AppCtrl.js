acs.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout','$log', '$location', '$translate',  function($scope, $mdSidenav, $timeout, $log, $location, $translate) {

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
              {
                  nome: 'Camera',
                  icone: 'camera',
                  //iconeCor: 'pink',
                  view: '/plugin/camera'
              },
              {
                  nome: 'Device Info',
                  icone: 'perm_device_info',
                  //iconeCor: 'pink',
                  view: '/plugin/deviceInfo'
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

        }]);
