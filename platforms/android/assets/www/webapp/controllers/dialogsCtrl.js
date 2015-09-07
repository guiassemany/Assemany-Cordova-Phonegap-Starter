acs.controller('dialogsCtrl', ['$scope', '$mdDialog', '$filter', function($scope, $mdDialog, $filter) {
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
