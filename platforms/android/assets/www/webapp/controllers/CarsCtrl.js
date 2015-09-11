acs.controller('CarsCtrl', [ 'CarService', 'UtilService', '$location', function(CarService, UtilService, $location) {
  // A simple controller that fetches a list of data from a service
  // "Cars" is a service returning mock data (CarService.js)
  var vm = this;

  vm.cars = [];

  vm.util = UtilService;

  vm.getCars = function(){
      vm.cars = CarService.all();
  };

  vm.getDetail = function(id){
    $location.path('/api/car/' + id);
  }

}]);
