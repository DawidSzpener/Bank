describe("Deposit", function() {
  it("Should allow user to deposit money", function () {
    account = new Account()
    expect(account.deposit(200)).toEqual("Your balance is 200")
  });
});
