describe('Date', function() {
  
  beforeEach(function() {

    jasmine.clock().install();
    var baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);
    jasmine.clock().tick(50)
    expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("Should return todays date", function() {
    expect(Today()).toEqual("23/10/2013");
  });
});
