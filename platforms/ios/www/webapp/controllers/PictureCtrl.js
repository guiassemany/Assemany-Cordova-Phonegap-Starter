acs.controller('PictureCtrl', function($scope, $cordovaCamera) {

  document.addEventListener("deviceready", function () {

    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;
    }, function(err) {
      // error
    });


    $cordovaCamera.cleanup().then(
      console.log('teste');
    ); // only for FILE_URI

  }, false);
});
