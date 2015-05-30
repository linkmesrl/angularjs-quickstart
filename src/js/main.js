'use strict';

angular.module('groceryStore',[])
.controller('listCtrl', function($scope, $http){

    // Define a list of categories
    $scope.categories = ['Fruits', 'Vegetables'];

    // Retrieve data form the backend
    $http.get('../mocks/list.json')
    .success(function(list){
        $scope.products = list;
    })
    .error(function(err){
        throw err;
    });

    // Define a function to add new products to my list
    $scope.addProduct = function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct = null;
    };

    // Define a function to add a product to my cart
    $scope.cart = [];
    $scope.addToCart = function(product){
        $scope.cart.push(product);
    };

})
.controller('cartCtrl', function($scope){

    // Define a function to remove element from cart
    $scope.removeFromCart = function(idx){
        $scope.cart.splice(idx, 1);
    }
});