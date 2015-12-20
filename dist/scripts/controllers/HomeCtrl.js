(function() {
	function HomeCtrl($scope, Room, Message) {
		$scope.rooms=Room.all;
		$scope.messages=Message.all;

		$scope.sendMessage = function(){
		  Message.create($scope.name,$scope.newMessage,$scope.roomID);
		  $scope.newMessage = "";
		};
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room','Message', HomeCtrl]);
})();

