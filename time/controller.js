angular.module("customInputBoxDirectives").controller("timeCtrl",["$scope","$timeout", function($scope) {
 //Time Picker Start
      this.showTimePicker = function(ev) {
        $mdpTimePicker($scope.currentTime, {
          targetEvent: ev
        }).then(function(selectedDate) {
          $scope.currentTime = selectedDate;
        });
      }

      //Time Picker End
}]);


 