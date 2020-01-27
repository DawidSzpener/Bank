describe("Transactions", function() {

  beforeEach(function() {
    transactions = new Transactions();
  })

  describe('Deduct', function() {
    it("Should deduct amount from the account", function() {
      transactions.deduct(200)
      expect(transactions.show()).toEqual(-200);
    });
  });

  describe('Add', function() {
    it("Should add balance to the account by amount", function() {
      transactions.add(200)
      expect(transactions.showTransactions()).toEqual(['2020-1-27', 200, 200]);
    });
  });
});
