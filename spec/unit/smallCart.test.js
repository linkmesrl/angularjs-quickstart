describe('smallCart Directive', function () {

  var element, scope;
  beforeEach(module('groceryStore'));
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile('<small-cart></small-cart>')(scope);
  }));

  it('shows the correct length', function () {
    scope.$digest();
    expect(element.find('span').text()).toEqual('0 Items in cart');
  });

});