angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


  .controller('CustomCtrl' , function($scope) {

    $scope.items = [
      { title: 'title', id: 1 },
      { title: 'title', id: 2 },
      { title: 'title', id: 3 },
      { title: 'title', id: 4 },
      { title: 'title', id: 5 },
      { title: 'title', id: 6 },
      { title: 'title', id: 7 },
      { title: 'title', id: 8 }];

  })



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
