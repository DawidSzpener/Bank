(function(exports) {


  function Account(transaction){
    this.transactions = transaction;
  }
  
  Account.prototype.display = function() {
    return this.transactions.showTransactions();
  };

  Account.prototype.withdraw = function(int) {
    this.transactions.deduct(int);
  };

  Account.prototype.deposit = function(int) {
    this.transactions.add(int);
  };
  
  Account.prototype.showBalance = function() {
    return this.transactions.show();
  };
  
  exports.Account = Account;
})(this);
