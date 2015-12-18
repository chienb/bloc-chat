(function() {
    function config($stateProvider, $locationProvider) {
    	$locationProvider
    	    .html5Mode({
    	        enabled: true,
    	        requireBase: false
    	    });

 		$stateProvider
 		    .state('home', {
 		        url: '/',
 		        controller: 'HomeCtrl',
 		        templateUrl: '/templates/chatroom.html'
 		    });
    }

    angular
        .module('blocChat', ['firebase','ui.router', 'ui.bootstrap'])
        .config(config);
})();




