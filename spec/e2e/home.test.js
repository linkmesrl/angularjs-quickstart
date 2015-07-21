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

});
