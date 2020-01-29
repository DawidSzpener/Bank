(function(exports) {

  function Transactions(){
    this.history = [];
  }

  Transactions.prototype.showTransactions = function() {
    console.log("date || credit || debit || balance");
    var index = this.history.length -1;
    for (index; index >= 0; index--) {
      console.log(this.history[index]);
    }
  };

  Transactions.prototype.saveDepositRecord = function(int, balance, date) {
    this.history.push(date + " || || " + int + " || " + balance);
  };

  Transactions.prototype.saveWithdrawRecord = function(int, balance, date) {
    this.history.push(date + " || " + int + " || || " + balance);
  };

  Transactions.prototype.show = function() {
    return this.history;
  };

  exports.Transactions = Transactions;
})(this);
