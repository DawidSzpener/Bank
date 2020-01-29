(function(exports) {


  function Account(transactions, balance){
    this.transactions = transactions;
    this.balance = balance;
  }
  
  Account.prototype.display = function() {
    return this.transactions.showTransactions();
  };

  Account.prototype.withdraw = function(int) {
    if (this.balance.show() >= int) {
      this.balance.ammount -= int;
      this.transactions.saveWithdrawRecord(int, this.balance.show(), (new Today).date());
      return "Thanks for withdrawing";
    }
    return "Not enough funds";
  };

  Account.prototype.deposit = function(int) {
    this.balance.ammount += int;
    this.transactions.saveDepositRecord(int, this.balance.show(), (new Today).date());
    return "Thanks for depositing";
  };
  
  Account.prototype.showBalance = function() {
    return this.balance.show();
  };
  
  exports.Account = Account;
})(this);
