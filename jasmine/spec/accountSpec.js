describe("Account", function() {

  beforeEach(function() {
    account = new Account();
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
      account.deposit(200)
      account.withdraw(200)
      expect(account.display()).toEqual([[ '2020-1-27', 200, 200 ], [ '2020-1-27', 200, 0 ]]);
    });
  });
});
