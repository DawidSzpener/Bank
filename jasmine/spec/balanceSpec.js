describe("Balance", function() {

  describe('currentBalance', function() {

    var balance = new Balance

    it("Should return balance value", function() {
      expect(balance.show()).toEqual(0);
    });
  });
});
