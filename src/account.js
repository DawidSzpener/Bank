(function(exports) {

  function Account(transactions = new Transactions, balance = new Balance){
    this.transactions = transactions;
    this.balance = balance;
  }

  Account.prototype.display = function() {
    return this.transactions.printTransactions();
  };

  Account.prototype.withdraw = function(int) {
    if (this.balance.show() >= int) {
      this.balance.deductFromTheBalance(int);
      this.transactions.saveWithdrawRecord(int, this.balance.show(), (new Today).date());
      return "Your balance is " + this.balance.show();
    }
    return "Not enough funds, your balance is " + this.balance.show();
  };

  Account.prototype.deposit = function(int) {
    this.balance.addToTheBalance(int);
    this.transactions.saveDepositRecord(int, this.balance.show(), (new Today).date());
    return "Your balance is " + this.balance.show();
  };

  exports.Account = Account;
})(this);
