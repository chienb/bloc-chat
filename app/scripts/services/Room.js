(function() {
	function ViewRooms($firebaseArray) {
		var firebaseRef = new Firebase("https://ukh7gt3n3al.firebaseio-demo.com/");
		var rooms = $firebaseArray(firebaseRef.child('rooms'));
		var addRoom = function (roomName) {
			rooms.$add(roomName);
		};
		
		return rooms;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', ViewRooms]);
})();
