(function(exports) {

  function Transactions(balance){
    this.balance = balance;
    this.history = [];
  }

  Transactions.prototype.add = function(int) {
    this.balance.ammount += int;
    this.saveAddRecord(int);
  };

  Transactions.prototype.deduct = function(int) {
    if (this.balance.show() >= int) {
      this.balance.ammount -= int;
      this.saveDeductRecord(int);
    }
  };

  Transactions.prototype.show = function() {
    return this.balance.show();
  };

  Transactions.prototype.showTransactions = function() {
    console.log("date || credit || debit || balance");
    var index = this.history.length -1;
    for (index; index >= 0; index--) {
      console.log(this.history[index]);
    }
  };

  Transactions.prototype.saveAddRecord = function(int) {
    this.history.push((new Today).date() + " || || " + int + " || " + this.balance.show());
  };

  Transactions.prototype.saveDeductRecord = function(int) {
    this.history.push((new Today).date() + " || " + int + " || || " + this.balance.show());
  };

  exports.Transactions = Transactions;
})(this);
