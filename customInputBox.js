angular.module("customInputBoxDirectives")
  .directive("customInputBox", function(){
    return {
      templateUrl: './text/template.html',
      scope: {
        class: "=",
        bindData: "=",
        label: "@",
        type: "@"
      },
      restrict: 'C',
      controller: function($scope){
        console.log("inside directive controller");
        console.log($scope);
        $scope.mandatory="true";
        $scope.change=function(changedVal) {
          bindData = changedVal;
        }
      }
    }
  });
