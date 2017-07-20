'use strict';

describe('Service: <%= cameledName %>', function () {

  beforeEach(module('<%= scriptAppName %>'));

  var <%= cameledName %>;
  beforeEach(inject(function (_<%= cameledName %>_) {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', function () {

  });
});
