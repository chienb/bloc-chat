(function() {
    function ModalFunction($scope, $uibModal, $log) {

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

          var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'templates/modal.html',
            controller: 'ModalInstanceCtrl',
            size: size,

          });

          modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        };

        $scope.toggleAnimation = function () {
          $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }

        angular
            .module('blocChat')
            .controller('ModalCtrl', ['$scope', '$uibModal', '$log', ModalFunction]);
})();