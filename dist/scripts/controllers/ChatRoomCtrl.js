(function() {
	function ChatRoomCtrl($scope, $firebaseArray, Room) {
		var ref = new Firebase("https://ukh7gt3n3al.firebaseio-demo.com/");
		$scope.messages = $firebaseArray(ref);

		$scope.rooms = Room;

		//ADD MESSAGE METHOD
        $scope.addMessage = function(e) {
	    	//LISTEN FOR RETURN KEY
	        if (e.keyCode === 13 && $scope.msg) {
	          //ALLOW CUSTOM OR ANONYMOUS USER NAMES
	          var name = $scope.name || "anonymous";
	          $scope.messages.$add({ from: name, body: $scope.msg });
	          //RESET MESSAGE
	          $scope.msg = "";
	        }
	    }
    }

    angular
        .module('blocChat')
        .controller('ChatRoomCtrl', ['$scope', '$firebaseArray', 'Room', ChatRoomCtrl]);
})();

