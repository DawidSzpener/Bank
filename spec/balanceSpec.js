describe("Balance", function() {

  // beforeEach(function() {
  //   var time = Date('13/01/2012')
  //   jasmine.clock().install();
  // });

  // afterEach(function() {
  //   jasmine.clock().uninstall();
  // });

  var balance = new Balance

  describe('currentBalance', function() {

    it("Should return balance value", function() {
      expect(balance.show()).toEqual(0);
    });
  });

  describe('deductFromTheBalance', function() {

    it("Should deduct value from the balance", function() {
      expect(balance.deductFromTheBalance(200)).toEqual(-200);
    });
  });

  describe('addToTheBalance', function() {

    it("Should add value to the balance", function() {
      expect(balance.addToTheBalance(400)).toEqual(200);
    });
  });
});
