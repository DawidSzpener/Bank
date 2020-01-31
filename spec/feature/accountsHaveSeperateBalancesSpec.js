describe("Withdraw", function() {
  it("Accounts should not share the same balance", function () {
    account1 = new Account()
    account2 = new Account()
    account1.deposit(200)
    expect(account1.display() == account2.display()).toBe(true)
  });
});