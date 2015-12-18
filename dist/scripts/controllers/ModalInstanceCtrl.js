(function () {
  function ModalInstanceFunction($scope,$uibModalInstance,Room){
      $scope.add = function () {
        Room.create($scope.newRoom);//create new Room object when clicked, ngModel=newRoom whatever gets input in the field =newRoom
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
