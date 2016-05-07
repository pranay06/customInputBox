angular.module("customInputBoxDirectives")
  .directive("customInputBox", function(){
    return {
      templateUrl: './customPartial.html',
      scope: {
        class: "@",
        bindData: "=",
        label: "@",
        type: "@",
        domainList:"<",
        id: "@",
        required: "<"

      },
      controller: function($scope){
        console.log("inside directive controller");
        console.log($scope);
        // $scope.mandatory="true";
        $scope.reflect=function(changedVal) {
          console.log("In reflect");
          $scope.bindData = changedVal;
          console.log(changedVal);

        }
      }
    }
  });
