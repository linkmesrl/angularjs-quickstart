'use strict';

angular.module('groceryStore',[])
.controller('listCtrl', function($scope, $http){

    $scope.categories = ['Fruits', 'Vegetables'];

    $http.get('../mocks/list.json')
    .success(function(list){
        $scope.products = list;
    })
    .error(function(err){
        throw err;
    });
});