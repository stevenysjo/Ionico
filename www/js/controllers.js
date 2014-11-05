angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state, $ionicModal) {
        $scope.onClick = function() {
            scope = $scope;
            $state.go('tab.events');
        };
            $ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
                                        $scope.modal = $ionicModal;
                                        }, {
                                        // Use our scope for the scope of the modal to keep it simple
                                        scope: $scope,
                                        // The animation we want to use for the modal entrance
                                        animation: 'slide-in-up'
                                        });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('SearchCtrl', function($scope) {
            })
.controller('EventsCtrl', function($scope) {
            $scope.back = function() {
            $state.go('tab.dash');
            };
    })
;

