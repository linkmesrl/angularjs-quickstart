'use strict';

angular.module('groceryStore')
.controller('aboutCtrl', function($scope, $http, cartService){
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});