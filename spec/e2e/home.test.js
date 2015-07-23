'use strict';

describe('The home page view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./home.po');
  });

  it('should include a container and a row', function() {
    expect(page.pageContent.isPresent()).toBeTruthy();
  });

  it('should should have a list of 7 elements', function() {
    expect(page.products.count()).toEqual(7);
  });

  it('should add a product', function(done){

    page.newProductCategory.sendKeys('Fruits');
    page.newProductName.sendKeys('Mango');
    page.newProductQuantity.sendKeys(2);

    page.addProduct.click()
    .then(function(){
        expect(page.products.count()).toEqual(8);
        done();
    })

  });

});
