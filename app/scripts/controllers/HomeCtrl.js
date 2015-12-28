(function() {
	function HomeCtrl($scope, Room, Message, $cookies) {
		$scope.rooms=Room.all;		
		$scope.messages = Room.messages("");
		$scope.name = $cookies.blocChatCurrentUser;

		$scope.selectRoom = function(room) {
			// find the $id of the passed in room variable and attach it to scope
			$scope.roomID=room.$id;
			// update the message scope to show all messages with above $id
			$scope.messages=Room.messages($scope.roomID);

		};

		$scope.sendMessage = function(){
		  	
		  	Message.create($scope.name,$scope.newMessage,$scope.roomID);
		  	$scope.newMessage = "";

		};
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room','Message', '$cookies',HomeCtrl]);
})();

