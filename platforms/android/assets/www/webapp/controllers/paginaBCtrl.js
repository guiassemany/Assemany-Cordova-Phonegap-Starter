acs.controller('PaginaBCtrl', function(Post) {

  var vm = this;

  //$scope.posts = [];

  vm.posts = [];
  Post.query(function(data) {
    vm.posts = data;
  });
  //console.log($scope.posts);

});
