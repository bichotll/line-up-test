'use strict';

describe('Service: configConstant', function () {

  // load the service's module
  beforeEach(module('angularLineupApp'));

  // instantiate service
  var configConstant;
  beforeEach(inject(function (_configConstant_) {
    configConstant = _configConstant_;
  }));

  it('should do something', function () {
    expect(!!configConstant).toBe(true);
  });

});
