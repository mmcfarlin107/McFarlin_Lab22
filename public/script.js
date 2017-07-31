var app = angular.module('myModule',[]);

app.controller('myCtrl',function($scope, $http){
// $scope.randomLyrics;
$http({
    method: 'GET',
    url: '/lyrics/lyric'
  }).then(function(response) {
    $scope.randomLyrics = response.data;
    console.log(response.data);
  })

});
