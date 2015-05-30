'use strict';

angular.module('groceryStore')
.controller('cartCtrl', function($scope, cartService){

    $scope.cart = cartService.cart;
    // Define a function to remove element from cart
    $scope.removeFromCart = function(idx){
        cartService.remove(idx);
    }
});