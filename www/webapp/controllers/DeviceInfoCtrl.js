acs.controller('DeviceInfoCtrl', ['$cordovaDevice', function($cordovaDevice) {

  var vm = this;

  document.addEventListener("deviceready", function () {

     vm.device = $cordovaDevice.getDevice();
     vm.cordova = $cordovaDevice.getCordova();
     vm.model = $cordovaDevice.getModel();
     vm.platform = $cordovaDevice.getPlatform();
     vm.uuid = $cordovaDevice.getUUID();
     vm.version = $cordovaDevice.getVersion();

  }, false);

}]);
