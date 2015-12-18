(function() {
	function HomeCtrl($scope, Room, Message) {
		$scope.rooms=Room.all;

		$scope.sendMessage = function(){
		  Message.create($scope.newMessage);
		  $scope.newMessage = "";
		};
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room','Message', HomeCtrl]);
})();

