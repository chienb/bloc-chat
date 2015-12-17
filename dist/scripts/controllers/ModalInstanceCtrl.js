(function () {
  function ModalInstanceFunction($scope,$uibModalInstance){
      $scope.add = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$scope','$uibModalInstance', ModalInstanceFunction])
})();
