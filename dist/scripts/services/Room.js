(function() {
	function ViewRooms($firebaseArray) {
		var firebaseRef = new Firebase("https://ukh7gt3n3al.firebaseio-demo.com/");
		var rooms = $firebaseArray(firebaseRef.child('rooms'));
		console.log("test");
		console.log(rooms);

		return rooms;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', ViewRooms]);
})();
