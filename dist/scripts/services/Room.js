(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase("https://ukh7gt3n3al.firebaseio-demo.com/");
		var rooms = $firebaseArray(firebaseRef.child('rooms'));
		
		return {
			rooms,
			create:function(room){
				rooms.$add(room)
			}
		};
	}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
