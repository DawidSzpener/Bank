describe("Transactions", function() {

  beforeEach(function() {
    transaction = new Transaction();
  })

  describe('Deduct', function() {
    it("Should deduct amount from the account", function() {
      deduct(200)
      expect(transaction.balance(show)).toEqual(300);
    });
  });

  describe('Add', function() {
    it("Should add balance to the account by amount", function() {
      add(200)
      expect(transaction.balance(show)).toEqual(700);
    });
  });
});