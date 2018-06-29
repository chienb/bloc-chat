(function() {
	function Message($firebaseArray) {
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
		var messages = $firebaseArray(rootRef.child('messages'));
		
		return {
			all: messages,
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
