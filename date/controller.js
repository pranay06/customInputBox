angular.module("customInputBoxDirectives").controller("dateCtrl",["$scope", function($scope) {
  //DateCtrl
  $scope.dateValue = new Date();
  console.log("Inside scope of Custom Controller of Date");
  console.log($scope);
}]);
