angular.module("customInputBoxDirectives").controller("singleSelectCtrl",["$scope", function($scope) {
  //DateCtrl

  console.log("Inside controller of single select");
  console.log($scope);
  $scope.specificAttributes = $scope.$parent.$parent.specificAttributes;
  console.log($scope.$parent.$parent.specificAttributes);
  console.log($scope.specificAttributes);
  if($scope.specificAttributes.domainList.length>0) {
    if($scope.specificAttributes.domainList[0].constructor === Object)
      $scope.listDataType="object";
    else {
      $scope.listDataType="element";
    }
  }
  else {
    console.log("Invalid List Data Type");
  }
}]);
