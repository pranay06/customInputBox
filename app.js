angular.module('customInputBoxDirectives',["ngMaterial"])
  .controller('outsideController',function($scope){
    $scope.name = "ll";
    $scope.checkinDate = new Date();
    console.log(typeof $scope.checkinDate)
    $scope.Datelabel = "Checkin Date"
    console.log("inside outsideController");
    console.log($scope);
});
