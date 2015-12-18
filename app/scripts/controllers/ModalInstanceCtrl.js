(function () {
  function ModalInstanceFunction($scope,$uibModalInstance,Room){
      $scope.add = function () {
        Room.create($scope.newRoom);
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$scope','$uibModalInstance','Room', ModalInstanceFunction])
})();
