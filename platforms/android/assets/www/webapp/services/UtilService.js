acs.factory('UtilService', [ '$location', function($location) {
  return {
    linkTo: function(view) {
      $location.path(view);
    }
  }
}]);
