(function() {
    function config($stateProvider, $locationProvider) {
    	$locationProvider
    	    .html5Mode({
    	        enabled: true,
    	        requireBase: false
    	    });

 		$stateProvider
 		    .state('chatroom', {
 		        url: '/',
 		        controller: 'ChatRoomCtrl as chatroom',
 		        templateUrl: '/templates/chatroom.html'
 		    })

 		$stateProvider
 		    .state('modal', {
 		        url: '/',
 		        controller: 'ModalCtrl as modal',
 		        templateUrl: '/templates/modal.html'
 		    })

	    $stateProvider
	        .state('modalinstance', {
	            url: '/',
	            controller: 'ModalInstanceCtrl as modalinstance',
	        });
    }

    angular
        .module('blocChat', ['firebase','ui.router', 'ui.bootstrap'])
        .config(config);
})();




