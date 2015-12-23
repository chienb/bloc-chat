(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase("https://glaring-inferno-3086.firebaseio.com/");
		var rooms = $firebaseArray(firebaseRef.child('rooms'));
		
		return {
			all: rooms,
			create:function(room){
				rooms.$add({
					name: room
				});
			},
			messages: function (roomID) {
				var messagesArray= $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomID));
				return messagesArray;
			}
		};
	}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
