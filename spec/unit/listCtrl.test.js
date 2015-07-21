describe('ListController', function() {

  console.log('karma!');

  beforeEach(module('groceryStore'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {

    console.log('test Started');

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('listCtrl', { $scope: $scope });
      
      $scope.products = [];

      $scope.newProduct = {category: 'Fruits', name: 'Apple', quantity: 14};

      $scope.addProduct();

      expect($scope.products.length).toEqual(1);
    });
  });
});