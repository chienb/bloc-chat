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

    function run($cookies,$uibModal) {
        if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {
            $uibModal.open({
                  //animation: $scope.animationsEnabled,
                  templateUrl: 'templates/usermodal.html',
                  controller: 'UserModalInstanceCtrl',
                  size: 'sm',
            })    
        }
    }

    angular
        .module('blocChat', ['firebase','ui.router', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies','$uibModal', run]);

})();




