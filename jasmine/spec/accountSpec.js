describe("Account", function() {

  beforeEach(function() {
    balance = new Balance
    transactions = new Transactions(balance)
    account = new Account(transactions);
  })

  describe('Deposit', function() {
    it("Should add money to accounts balance", function() {
      account.deposit(200)
      expect(account.showBalance()).toEqual(200);
    });
  });

  describe('Withdraw', function() {
    it("Should deduct money from accounts balance", function() {
      account.withdraw(200)
      expect(account.showBalance()).toEqual(-200);
    });
  });

  describe('Display', function() {
    it("Should show previous transactions", function() {
      expect(account.display()).toEqual();
    });
  });
});
