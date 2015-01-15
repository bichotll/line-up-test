'use strict';

describe('Service: eventFactory', function () {

  // load the service's module
  beforeEach(module('androidLineupApp'));

  // instantiate service
  var eventFactory;
  beforeEach(inject(function (_eventFactory_) {
    eventFactory = _eventFactory_;
  }));

  it('should do something', function () {
    expect(!!eventFactory).toBe(true);
  });

});
