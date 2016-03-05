angular
  .module("surf")
  .controller("NavController", NavController)

function NavController($http, $scope, getCONT){
  $scope.thing = {}

getCONT.getall().then(function(results){
  $scope.thing.allspots = results
  })


}


// return function( item ) {
//   return item.name === continent.name;
// };
