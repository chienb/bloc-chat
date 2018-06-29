(function() {
	function Room($firebaseArray) {
// 		var firebaseRef = new Firebase("https://glaring-inferno-3086.firebaseio.com/");
		  // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyBYbsXxdStO5yagrRmTbsylLQATx9Sei3A",
		    authDomain: "brett-bloc-chat.firebaseapp.com",
		    databaseURL: "https://brett-bloc-chat.firebaseio.com",
		    projectId: "brett-bloc-chat",
		    storageBucket: "brett-bloc-chat.appspot.com",
		    messagingSenderId: "967177598829"
		  };
		  firebase.initializeApp(config);
		var rootRef = firebase.database().ref();
		
		var rooms = $firebaseArray(rootRef.child('rooms'));
		
		return {
			all: rooms,
			create:function(room){
				rooms.$add({
					name: room
				});
			},
			messages: function (roomID) {
				var messagesArray= $firebaseArray(rootRef.child('messages').orderByChild('roomId').equalTo(roomID));
				return messagesArray;
			}
		};
	}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
