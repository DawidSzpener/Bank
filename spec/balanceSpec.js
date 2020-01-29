describe("Balance", function() {

  describe('currentBalance', function() {

    var balance = new Balance

    it("Should return balance value", function() {
      expect(balance.show()).toEqual(0);
    });
  });

  describe('addToTheBalance', function() {

    var balance = new Balance

    it("Should add value to the balance", function() {
      balance.addToTheBalance(200)
      expect(balance.show()).toEqual(200);
    });
  });

  describe('deductFromTheBalance', function() {

    var balance = new Balance

    it("Should deduct value from the balance", function() {
      balance.deductFromTheBalance(200)
      expect(balance.show()).toEqual(-200);
    });
  });
});
