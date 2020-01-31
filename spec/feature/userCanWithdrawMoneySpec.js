describe("Withdraw", function() {
  it("Should allow user to withdraw money", function () {
    account = new Account();
    account.deposit(200)
    expect(account.withdraw(200)).toEqual("Your balance is 0")
  });
});