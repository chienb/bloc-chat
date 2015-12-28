(function () {
  function UserModalInstanceFunction($scope,$uibModalInstance,$cookieStore){
      $scope.addUser = function (username) {
        $cookieStore.put("blocChatCurrentUser",username);
        $uibModalInstance.close();
      };
  }

  angular
    .module('blocChat')
    .controller('UserModalInstanceCtrl', ['$scope','$uibModalInstance','$cookieStore', UserModalInstanceFunction])
})();
