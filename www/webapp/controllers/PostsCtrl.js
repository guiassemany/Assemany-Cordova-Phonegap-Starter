acs.controller('PostsCtrl' , function(Post, UtilService) {

  var vm = this;

  vm.posts = [];

  vm.util = UtilService;

  Post.query(function(data) {
    vm.posts = data;
  });
  //console.log($scope.posts);

});
