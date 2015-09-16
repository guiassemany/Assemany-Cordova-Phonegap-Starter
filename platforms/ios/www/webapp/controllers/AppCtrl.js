acs.controller('AppCtrl', ['$mdSidenav', '$timeout','$log', '$location', '$translate', '$filter', '$state', function($mdSidenav, $timeout, $log, $location, $translate, $filter, $state) {

            var vm = this;

            vm.itensMenu = [
              {
                  nome: 'DASHBOARD',
                  icone: 'dashboard',
                  //iconeCor: 'pink',
                  state: 'dashboard'
              },
              {
                  nome: 'TABS',
                  icone: 'tab',
                  //iconeCor: 'red',
                  state: 'tabs'
              },
              {
                  nome: 'RESTFUL_TEST',
                  icone: 'sync',
                  //iconeCor: 'pink',
                  state: 'api'
              },
              {
                  nome: 'DIALOGS',
                  icone: 'chat',
                  //iconeCor: 'pink',
                  state: 'dialogs'
              },
              {
                  nome: 'CARDS',
                  icone: 'view_stream',
                  //iconeCor: 'pink',
                  state: 'cards'
              },
              {
                  nome: 'CAMERA',
                  icone: 'camera',
                  //iconeCor: 'pink',
                  state: 'camera'
              },
              {
                  nome: 'DEVICE_INFO',
                  icone: 'perm_device_info',
                  //iconeCor: 'pink',
                  state: 'deviceInfo'
              }
            ];

            vm.selected = null;

            vm.toggleMenu = function (name) {
              $mdSidenav(name).toggle();
            }

            vm.selectItem = function(itemState) {
              vm.selected = angular.isNumber(itemState) ? vm.itensMenu[itemState.index] : itemState;
              $state.go(itemState);
              vm.toggleMenu('left');
            }

            vm.changeLanguage = function(langKey) {
              $translate.use(langKey);
            };

}]);
