describe("Account", function() {

  beforeEach(function() {
    transactions = jasmine.createSpyObj('transactions', ['show', 'saveDepositRecord', 'saveWithdrawRecord', 'showTransactions']);
    balance = jasmine.createSpyObj('balance', ['show']);

    account = new Account(transactions, balance);
  })

  describe('Deposit', function() {
    it("Should add money to accounts balance", function() {
      account.deposit(200)
      balance.show.and.returnValue(200)
      expect(account.showBalance()).toEqual(200);
    });
  });

  describe('Withdraw', function() {
    it("Should deduct money from accounts balance", function() {
      account.deposit(200)
      account.withdraw(200)
      balance.show.and.returnValue(0)
      expect(account.showBalance()).toEqual(0);
    });
  });

  describe('Display', function() {
    it("Should show all transactions", function() {
      account.deposit(200)
      account.deposit(200)
      spyOn(window.console, 'log')
      transactions.showTransactions.and.returnValue(console.log("1"))
      account.display()
      expect(window.console.log).toHaveBeenCalled();
    });
  });
});
