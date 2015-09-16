acs.controller('CardsCtrl', ['$mdDialog', function($mdDialog) {
  var vm = this;
  vm.allCards = [
    {
      "title": "Fiscolas",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada aliquam ante, sit amet commodo mi iaculis et. Morbi sed lectus lectus."
    },
    {
      "title": "Fiscolandia",
      "text": "Proin dictum, augue non egestas placerat, turpis odio convallis quam, at feugiat orci nulla venenatis mauris. Nullam condimentum auctor odio nec venenatis. Cras placerat ligula nec ipsum consectetur ullamcorper. Vivamus a eros volutpat, pretium nunc semper, ornare nunc. Aenean vulputate enim nisl, in euismod nibh euismod id. Nullam pulvinar erat nec nisl iaculis molestie. Praesent a felis auctor, facilisis risus in, vestibulum tortor. Suspendisse volutpat, erat ut hendrerit sodales, arcu lectus rutrum nisi, vitae posuere arcu enim mattis eros."
    },
    {
      "title": "FiscoNunes",
      "text": "Proin dictum, augue non egestas placerat, turpis odio convallis quam, at feugiat orci nulla venenatis mauris. Nullam condimentum auctor odio nec venenatis. Cras placerat ligula nec ipsum consectetur ullamcorper. Vivamus a eros volutpat, pretium nunc semper, ornare nunc. Aenean vulputate enim nisl, in euismod nibh euismod id. Nullam pulvinar erat nec nisl iaculis molestie. Praesent a felis auctor, facilisis risus in, vestibulum tortor. Suspendisse volutpat, erat ut hendrerit sodales, arcu lectus rutrum nisi, vitae posuere arcu enim mattis eros."
    },
    {
      "title": "Fiscolangelo",
      "text": "Proin dictum, augue non egestas placerat, turpis odio convallis quam, at feugiat orci nulla venenatis mauris. Nullam condimentum auctor odio nec venenatis. Cras placerat ligula nec ipsum consectetur ullamcorper. Vivamus a eros volutpat, pretium nunc semper, ornare nunc. Aenean vulputate enim nisl, in euismod nibh euismod id. Nullam pulvinar erat nec nisl iaculis molestie. Praesent a felis auctor, facilisis risus in, vestibulum tortor. Suspendisse volutpat, erat ut hendrerit sodales, arcu lectus rutrum nisi, vitae posuere arcu enim mattis eros."
    }
  ];

  var originatorEv;

    vm.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    vm.addCard = function(card){
        vm.allCards.push(card);
        vm.newCard = null;
      }

    vm.edit = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('You clicked the edit button!')
          .content('Thats just an example of how easy it is to define actions on ng-click.')
          .ok('Awesome!')
      );

      originatorEv = null;
    };

    vm.delete = function(card){
      var index = vm.allCards.indexOf(card);
      vm.allCards.splice(index, 1);
    };

  //console.log(vm.allCards);

}]);
