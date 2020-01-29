describe("Transactions", function() {

  beforeEach(function() {

    balance = jasmine.createSpyObj('balance', ['show']);
    // spyOn(transactions, 'saveAddRecord')

    transactions = new Transactions(balance)

  })

  describe('Deduct', function() {
    it("Should deduct amount from the account", function() {
      transactions.add(200)
      transactions.deduct(200)  
      balance.show.and.returnValue(0)
      expect(transactions.show()).toEqual(0);
    });
    
    it("Shouldnt deduct amount from the account if balance is less than ammount required", function() {
      transactions.deduct(200)  
      balance.show.and.returnValue(0)
      expect(transactions.show()).toEqual(0);
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
      balance.show.and.returnValue(200)
      transactions.add(200)
      balance.show.and.returnValue(400)
      transactions.add(200)
      spyOn(window.console, 'log')
      transactions.showTransactions()
      expect(window.console.log).toHaveBeenCalled();
    });
  });
});
