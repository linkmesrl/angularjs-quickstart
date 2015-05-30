'use strict';

angular.module('groceryStore')
.service('cartService', function(){

    // Define an empty cart
    this.cart = [];

    // Define a function to add a product to my cart
    this.add = function(product){
        this.cart.push(product);
    };

    this.remove = function(idx){
        this.cart.splice(idx, 1);
    };

    return this;
});