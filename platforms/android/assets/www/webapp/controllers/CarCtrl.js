acs.controller('CarCtrl', [ 'CarService', 'UtilService','$location', '$stateParams', function(CarService, UtilService,$location, $stateParams) {
  // A simple controller that fetches a list of data from a service
  // "Cars" is a service returning mock data (CarService.js)
  var vm = this;

  vm.car = {};
  vm.carId = $stateParams.carId;
  vm.util = UtilService;

  function getCar(carId)
  {
      vm.car = CarService.get(carId);
  };

  getCar(vm.carId);

}]);
