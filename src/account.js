var Account = function() {


  function Account(transactions = new Transactions(), balance = new Balance()){

    this._transactions = transactions;
    this._balance = balance;

    Account.prototype.display = function() {
      return this._transactions.printTransactions();
    };

    Account.prototype.withdraw = function(int) {
      if (this._balance.show() >= int) {
        this._balance.deductFromTheBalance(int);
        this._transactions.saveWithdrawRecord(int, this._balance.show(), Today());
        return "Your balance is " + balance.show();
      } else { return "Not enough funds, your balance is " + this._balance.show(); }
    };

    Account.prototype.deposit = function(int) {
      this._balance.addToTheBalance(int);
      this._transactions.saveDepositRecord(int, this._balance.show(), Today());
      return "Your balance is " + this._balance.show();
    };
  }
  
  return Account;
}();
