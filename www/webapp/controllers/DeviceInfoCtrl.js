acs.controller('DeviceInfoCtrl', [ '$scope', '$cordovaDevice', function($scope, $cordovaDevice) {
  
  document.addEventListener("deviceready", function () {

     $scope.device = $cordovaDevice.getDevice();
     $scope.cordova = $cordovaDevice.getCordova();
     $scope.model = $cordovaDevice.getModel();
     $scope.platform = $cordovaDevice.getPlatform();
     $scope.uuid = $cordovaDevice.getUUID();
     $scope.version = $cordovaDevice.getVersion();

  }, false);

}]);
