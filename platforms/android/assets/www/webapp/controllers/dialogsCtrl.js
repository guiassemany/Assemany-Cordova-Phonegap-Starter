acs.controller('dialogsCtrl', ['$mdDialog', '$filter', function($mdDialog, $filter) {

  var vm = this;

  vm.status = ' ';

  vm.showAlert = function(ev) {
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

  vm.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title($filter('translate')('MESSAGE'))
          .content('Escolha uma das opções.')
          .ariaLabel('Teste')
          .ok('Sim!')
          .cancel('Não')
          .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {

      vm.status = 'Você clicou em sim.';

    }, function() {

      vm.status = 'Você clicou em não.';

    });
  };

}]);
