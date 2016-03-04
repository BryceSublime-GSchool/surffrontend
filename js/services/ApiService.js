angular
  .module("surf")
  .service("ApiService", ApiService)

function ApiService($http){
  var ApiService = {}
  ApiService.getall = function(){
    return $http.get('https://rocky-hamlet-69324.herokuapp.com/')
  }

  return ApiService
}
