'use strict';

angular.module('groceryStore')
.controller('smallCartCtrl', function($scope, cartService){
    $scope.items = cartService.cart;
});