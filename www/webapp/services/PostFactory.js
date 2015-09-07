acs.factory("Post", function($resource) {
  return $resource("http://jsonplaceholder.typicode.com/posts");

});
