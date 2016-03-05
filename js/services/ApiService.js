angular
  .module("surf")
  .service("getCONT", getCONT)
  .service("getSpot", getSpot)



function getCONT($http){
  var getCONT = {}
  getCONT.getall = function(){
    return $http.get('https://rocky-hamlet-69324.herokuapp.com/')
  }
  return getCONT
  console.log(getCONT);
}




// function getREG($http){
//   var getREG = {}
//   getREG.getall = function(){
//     return $http.get('https://rocky-hamlet-69324.herokuapp.com/')
//   }
//
//   return getREG
//   console.log(getCONT);
// }

// function ApiService($http){
//   var ApiService = {}
//   ApiService.getall = function(){
//     return $http.get('https://rocky-hamlet-69324.herokuapp.com/')
//   }
//
//   return ApiService
// }
