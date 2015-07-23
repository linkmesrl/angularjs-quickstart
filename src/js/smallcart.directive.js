'use strict';

angular.module('groceryStore')
.directive('smallCart', function(cartService){
    
    return {
      restrict: 'E',
      scope: true,
      template: '<span><b>{{items.length}}</b> Items in cart</span>',
      link: function (scope, element) {
        scope.items = cartService.cart;
      }
    };
});

