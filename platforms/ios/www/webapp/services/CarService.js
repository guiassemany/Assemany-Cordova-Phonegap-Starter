acs.factory('CarService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cars = [
    { id: 0, title: 'Ferrari', description: 'A very good car.' },
    { id: 1, title: 'Dodge Ram', description: 'A very good car.' },
    { id: 2, title: 'Lamborghini', description: 'A very good car.' },
    { id: 3, title: 'Fusca', description: 'A very good car.' }
  ];

  return {
    all: function() {
      return cars;
    },
    get: function(carId) {
      // Simple index lookup
      return cars[carId];
    }
  }
});
