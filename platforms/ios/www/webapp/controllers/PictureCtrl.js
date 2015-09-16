acs.controller('PictureCtrl', [ '$cordovaCamera', function($cordovaCamera) {

  var vm = this;

  vm.takePicture = function() {
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      //targetWidth: 300,
      //targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = imageData;
    }, function(err) {
      // error
    });
  }

  vm.cleanPicture = function() {
    var image = document.getElementById('myImage');
    image.src = 'img/no-picture.png';
  }

}]);
