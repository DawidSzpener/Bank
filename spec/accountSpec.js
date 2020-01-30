describe("Account", function() {

  beforeEach(function() {
    transactions = jasmine.createSpyObj('transactions', ['show', 'saveDepositRecord', 'saveWithdrawRecord', 'printTransactions']);
    balance = jasmine.createSpyObj('balance', ['show', 'addToTheBalance', 'deductFromTheBalance']);

    account = new Account(transactions, balance);
  })

  describe('Deposit', function() {
    it("Should add money to accounts balance", function() {
      balance.show.and.returnValue(200)
      expect(account.deposit(200)).toEqual("Your balance is 200");
    });
  });

  describe('Withdraw', function() {
    it("Should not allow to withdraw and give a proper messege", function() {
      balance.show.and.returnValue(0)
      expect(account.withdraw(200)).toEqual("Not enough funds, your balance is 0");
    });

    it("Should deduct money from accounts balance", function() {
      balance.show.and.returnValue(200)
      expect(account.withdraw(200)).toEqual("Your balance is 200");
    });
  });

  describe('Display', function() {
    it("Should show all transactions", function() {
      account.deposit(200)
      account.deposit(200)
      account.display()
      expect(transactions.printTransactions).toHaveBeenCalled();
    });
  });
});
