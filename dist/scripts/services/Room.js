(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase("https://glaring-inferno-3086.firebaseio.com/");
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
