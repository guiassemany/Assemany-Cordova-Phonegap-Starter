acs.controller('CarsCtrl', [ 'CarService',  function(CarService) {
  // A simple controller that fetches a list of data from a service
  // "Cars" is a service returning mock data (CarService.js)
  var vm = this;

  vm.cars = [];

  vm.getCars = function(){
      vm.cars = CarService.all();
  };

}]);
