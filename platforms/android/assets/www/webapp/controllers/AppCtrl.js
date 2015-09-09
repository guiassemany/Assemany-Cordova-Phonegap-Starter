acs.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout','$log', '$location', '$translate',  function($scope, $mdSidenav, $timeout, $log, $location, $translate) {

            var itensMenu = [
              {
                  nome: 'Tabs',
                  icone: 'tab',
                  //iconeCor: 'red',
                  view: 'tabs'
              },
              {
                  nome: 'API Consume',
                  icone: 'sync',
                  //iconeCor: 'pink',
                  view: 'api'
              },
              {
                  nome: 'Dialogs',
                  icone: 'chat',
                  //iconeCor: 'pink',
                  view: 'dialogs'
              },
              {
                  nome: 'Cards',
                  icone: 'view_stream',
                  //iconeCor: 'pink',
                  view: '/cards'
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
