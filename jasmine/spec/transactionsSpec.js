describe("Transactions", function() {

  beforeEach(function() {

    balance = jasmine.createSpyObj('balance', ['show']);
    // spyOn(transactions, 'saveAddRecord')

    transactions = new Transactions(balance)

  })

  describe('Deduct', function() {
    it("Should deduct amount from the account", function() {
      transactions.deduct(200)
      balance.show.and.returnValue(-200)
      expect(transactions.show()).toEqual(-200);
    });
  });

  describe('Add', function() {
    it("Should add balance to the account by amount", function() {
      transactions.add(200)
      balance.show.and.returnValue(200)
      expect(transactions.show()).toEqual(200);
    });
  });

  describe('showTransactions', function() {
    it("Should display the transactions history", function() {
      spyOn(window.console, 'log')
      balance.show.and.returnValue(200)
      transactions.add(200)
      balance.show.and.returnValue(400)
      transactions.add(200)
      transactions.showTransactions()
      expect(window.console.log).toHaveBeenCalled();
    });
  });
});
