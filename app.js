angular.module('customInputBoxDirectives',["ngMaterial"])
  .controller('outsideController',function($scope){
    // $scope.name = "ll";
    // $scope.checkinDate = new Date();
    // console.log(typeof $scope.checkinDate)
    $scope.checkinDatelabel = "Checkin Date"
    // console.log("inside outsideController");
    console.log($scope);
    $scope.someLabel="Some Label sadsadsad";

    $scope.singleSelectInputData=['element1','element2','element3','element4'];

    $scope.customFieldData = {
                    "required": true,
                		"displayName": "Amenities",
                		"id": "amenities",
                		"type": "singleSelect",
                    "specificAttributes":{
                      "listLabelKey":'label',
                      "listValueKey":'value',
                      "domainList": [
                        {"label":"Pizza","value":"pizza"},
                          {"label":"Burger","value":"burger"},
                            {"label":"Salad","value":"salad"}
                      ]
                      // "domainList":["pizza","burger","ice-cream"]
                      }

                    }
});
