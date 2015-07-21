describe('ListController', function() {

  beforeEach(module('groceryStore'));

  var $controller, mockService;

  beforeEach(function(){
    module(function($provide){
      $provide.service('cartService',function(){
        this.add = jasmine.createSpy('add');
      });
    });
  })

  beforeEach(inject(function(cartService, _$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    mockService = cartService;
  }));

  describe('the addProduct function', function() {


    it('should insert a produc in the list', function() {
      var $scope = {};
      var controller = $controller('listCtrl', { $scope: $scope });
      
      $scope.products = [];

      $scope.newProduct = {category: 'Fruits', name: 'Apple', quantity: 14};

      $scope.addProduct();

      expect($scope.products.length).toEqual(1);
    });

    it('should call the service function', function() {
      var $scope = {};
      var controller = $controller('listCtrl', { $scope: $scope });

      var product = {category: 'Fruits', name: 'Apple', quantity: 14};

      $scope.addToCart(product);

      expect(mockService.add).toHaveBeenCalled();
      expect(mockService.add).toHaveBeenCalledWith(product);
    });
  });
});