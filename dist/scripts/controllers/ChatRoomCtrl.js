(function() {
	function ChatRoomCtrl($scope, $firebaseArray) {
		var ref = new Firebase("https://ukh7gt3n3al.firebaseio-demo.com/");
		$scope.messages = $firebaseArray(ref);
    }

    angular
        .module('blocChat')
        .controller('ChatRoomCtrl', ['$scope', '$firebaseArray']);
})();

