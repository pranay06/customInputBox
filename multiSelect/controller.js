angular.module("customInputBoxDirectives").controller("multiSelectCtrl",["$scope", function($scope) {
 
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


 //start of code to get unique categories from list

  function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


var unique=[];
for(i=0;i<$scope.specificAttributes.domainList.length;i++)
{
	var temp=$scope.specificAttributes.domainList[i].category;
	if(!contains(unique,temp))
	{
		unique.push(temp);
	}
}
//end 
console.log("unique contains"+unique)

$scope.unique=unique;
}]);