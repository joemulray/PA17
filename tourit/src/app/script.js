angular.module('appMaps', ['uiGmapgoogle-maps'])
  .controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 0, longitude: 0 }, zoom: 14};
    var onSuccess = function(position) {
      $scope.map.center = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      $scope.$apply();
    }
    function onError(error) {
      console.log('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  })
.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
  GoogleMapApi.configure({
    key: 'AIzaSyBvzH3fTP9Oozhwry6bfE-zfifd3cvSpqc',
    v: '3',
    libraries: 'weather,geometry,visualization'
  });
}]);
// var options = {
//   enableHighAccuracy: true
// };
//
// navigator.geolocation.getCurrentPosition(function(pos) {
//     $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
//     console.log(JSON.stringify($scope.position));
//   },
//   function(error) {
//     alert('Unable to get location: ' + error.message);
//   }, options);
