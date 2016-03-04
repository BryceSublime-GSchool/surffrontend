angular
  .module("surf")
  .controller("NavController", NavController)

function NavController($http, $scope, ApiService){
  $scope.thing = {}
ApiService.getall().then(function(results){
  $scope.thing.allspots = results
})

}
