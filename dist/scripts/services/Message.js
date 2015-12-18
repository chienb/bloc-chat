(function() {
	function Message($firebaseArray) {
		var firebaseRef = new Firebase("https://glaring-inferno-3086.firebaseio.com/");
		var messages = $firebaseArray(firebaseRef.child('messages'));
		
		return {
			messages,
			create:function(name,newMessage,roomID){
				messages.$add({
					username: name,
					content: newMessage,
					sentAt: Firebase.ServerValue.TIMESTAMP,
					roomId: roomID
				});	
			}
		};
	}

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
