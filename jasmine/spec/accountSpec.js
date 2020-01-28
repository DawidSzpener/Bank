describe("Account", function() {

  beforeEach(function() {
    transactions = jasmine.createSpyObj('transactions', ['show', 'add', 'deduct', 'showTransactions']);

    account = new Account(transactions);
  })

  describe('Deposit', function() {
    it("Should add money to accounts balance", function() {
      account.deposit(200)
      transactions.show.and.returnValue(200)
      expect(account.showBalance()).toEqual(200);
    });
  });

  describe('Withdraw', function() {
    it("Should deduct money from accounts balance", function() {
      account.withdraw(200)
      transactions.show.and.returnValue(-200)
      expect(account.showBalance()).toEqual(-200);
    });
  });

  describe('Display', function() {
    it("Should show previous transactions", function() {
      account.deposit(200)
      account.deposit(200)
      transactions.showTransactions.and.returnValue('date || credit || debit || balance\n' +
      '2020-1-28 || || 200 || 400\n' +
      '2020-1-28 || || 200 || 200')
      expect(account.display()).toEqual('date || credit || debit || balance\n' +
      '2020-1-28 || || 200 || 400\n' +
      '2020-1-28 || || 200 || 200');
    });
  });
});
