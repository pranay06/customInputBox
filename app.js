angular.module('customInputBoxDirectives',["ngMaterial","mdPickers"])
  .controller('outsideController',function($scope){
    // $scope.name = "ll";
    // $scope.checkinDate = new Date();
    // console.log(typeof $scope.checkinDate)
    $scope.checkinDatelabel = "Checkin Date"
    // console.log("inside outsideController");
    console.log($scope);

    $scope.selectedTime;
    $scope.someLabel="Some Label sadsadsad";

    $scope.singleSelectInputData=['element1','element2','element3','element4'];

     $scope.customFieldTime={
                           "type": "time"
     }
    $scope.customFieldData = {
                    "required": true,
                	  "displayName": "Amenities",
                	  "id": "amenities",
                	   "type": "multiSelect",
                     "specificAttributes":{
                    "listLabelKey":'label',
                    "listValueKey":'value',
                       /* "domainList":["pizza","burger","ice-cream"]*/


                     /* "domainList": [
                       				 {"label":"Pizza","value":"pizza"},
                         			 {"label":"Burger","value":"burger"},
                           			 {"label":"Salad","value":"salad"}
                                    ]*/

                      "domainList":[
                                { category: 'meat', name: 'Pepperoni' },
                                { category: 'meat', name: 'Sausage' },
                                { category: 'meat', name: 'Ground Beef' },
                                { category: 'meat', name: 'Bacon' },
                                { category: 'veg', name: 'Mushrooms' },
                                { category: 'veg', name: 'Onion' },
                                { category: 'veg', name: 'Green Pepper' },
                                { category: 'veg', name: 'Green Olives' }
                              ]

                     
                      }

                    }
});
