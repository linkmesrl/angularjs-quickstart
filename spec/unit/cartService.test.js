describe('Cart Service', function () {

  var cartService;
  beforeEach(module('groceryStore'));
  beforeEach(inject(function (_cartService_) {
    cartService = _cartService_;
  }));

  describe('the add function', function () {

    it('should add an item to the list', function () {

      expect(cartService.cart.length).toEqual(0);

      cartService.add({category: 'Fruits', name: 'Apple', quantity: 12});

      expect(cartService.cart.length).toEqual(1);
      expect(cartService.cart[0].name).toEqual('Apple');
      expect(cartService.cart[0].quantity).toEqual(12);
    });

    it('should remove an item from the list', function() {
      cartService.cart = ['apple', 'banana'];

      cartService.remove(0);

      expect(cartService.cart.length).toEqual(1);
      expect(cartService.cart[0]).toEqual('banana');

    });

  });

});