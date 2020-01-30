var Transactions = (function() {

  var _history = [];

  function Transactions(){

    Transactions.prototype.printTransactions = function() {
      console.log("date || credit || debit || balance");
      var index = _history.length -1;
      for (index; index >= 0; index--) {
        console.log(_history[index]);
      }
    };

    Transactions.prototype.saveDepositRecord = function(int, balance, date) {
      _history.push(date + " || || " + int + " || " + balance);
      return _history;
    };

    Transactions.prototype.saveWithdrawRecord = function(int, balance, date) {
      _history.push(date + " || " + int + " || || " + balance);
      return _history;
    };
  }

  return Transactions;
})();
