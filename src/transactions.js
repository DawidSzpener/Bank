var Transactions = (function() {


  function Transactions(){
    
    this._history = [];

    Transactions.prototype.printTransactions = function() {
      console.log("date || credit || debit || balance");
      var index = this._history.length -1;
      for (index; index >= 0; index--) {
        console.log(this._history[index]);
      }
    };

    Transactions.prototype.saveDepositRecord = function(int, balance, date) {
      this._history.push(date + " || || " + int + " || " + balance);
      return this._history;
    };

    Transactions.prototype.saveWithdrawRecord = function(int, balance, date) {
      this._history.push(date + " || " + int + " || || " + balance);
      return this._history;
    };
  }

  return Transactions;
})();
