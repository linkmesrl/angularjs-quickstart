/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.pageContent = element(by.css('.container > .row'));

  this.products = element.all(by.repeater('product in products'));

  this.newProductName = element(by.model('newProduct.name'));
  this.newProductCategory = element(by.model('newProduct.category'));
  this.newProductQuantity = element(by.model('newProduct.quantity'));
  this.addProduct = element(by.css('.label-top'));
};

module.exports = new MainPage();